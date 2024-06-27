import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { PadComponent } from '../pad/pad.component';
import { PlayerComponent } from '../player/player.component';
import { BottomComponent } from '../bottom/bottom.component';
import { ScoreComponent } from '../score/score.component';
import { Player } from 'src/app/models/player.model';
import { Game } from 'src/app/models/game.model';
import { Scoreboard } from 'src/app/models/scoreboard.model';
import { Throw } from 'src/app/models/throw.model';
import { NextPlayerService } from 'src/app/services/next-player.service';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [
    ToolbarComponent,
    PadComponent,
    PlayerComponent,
    BottomComponent,
    ScoreComponent,
  ],
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  public isScoreOpen = false;

  game: Game;
  player1: Player;
  player2: Player;
  scoreBoardPlayer1: Scoreboard;
  scoreBoardPlayer2: Scoreboard;

  indexCurrentPlayer = 0;

  constructor(
    private nextPlayerService: NextPlayerService,
  ) { }

  ngOnInit(): void {
    this.player1 = new Player();
    this.player1.idPlayer = 1;
    this.player1.nom = 'Fraquet';
    this.player1.prenom = 'Thomas';
    this.player1.picture = 'user1.png';

    this.player2 = new Player();
    this.player2.idPlayer = 2;
    this.player2.nom = 'Semelin';
    this.player2.prenom = 'Jérémie';
    this.player2.picture = 'user2.png';

    this.scoreBoardPlayer1 = new Scoreboard();
    this.scoreBoardPlayer1.idScoreboard = 1;
    this.scoreBoardPlayer1.idPlayer = 1;
    this.scoreBoardPlayer1.throws = [new Throw()];

    this.scoreBoardPlayer2 = new Scoreboard();
    this.scoreBoardPlayer2.idScoreboard = 2;
    this.scoreBoardPlayer2.idPlayer = 2;
    this.scoreBoardPlayer2.throws = [new Throw()];

    this.game = new Game();
    this.game.idGame = 1;
    this.game.listPlayers = [this.player1, this.player2];
    this.game.listScores = [501, 501];
    this.game.scoreBoards = [this.scoreBoardPlayer1, this.scoreBoardPlayer2];

    this.nextPlayerService.nextPlayer$.subscribe(() => {
      if (this.game.listScores[this.indexCurrentPlayer]
        - this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].scoreDart1
        - this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].scoreDart2
        - this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].scoreDart3
        < this.game.numberRound
      ) {
        this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].remainingScore;
      } else {
        this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].remainingScore = this.game.listScores[this.indexCurrentPlayer]
          - this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].scoreDart1
          - this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].scoreDart2
          - this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].scoreDart3;
      }
        
      this.game.listScores[this.indexCurrentPlayer] = this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].remainingScore;
      
      if (this.indexCurrentPlayer + 1 === this.game.listPlayers.length) {
        this.game.numberRound ++;
        
        for (let i = 0; i < this.game.listPlayers.length; i++) {
          this.game.scoreBoards[i].throws.push(new Throw());
        }
      }

      this.indexCurrentPlayer = (this.indexCurrentPlayer + 1) % this.game.listPlayers.length;
    });
  }

  public openScore(): void {
    this.isScoreOpen = true;
  }

}
