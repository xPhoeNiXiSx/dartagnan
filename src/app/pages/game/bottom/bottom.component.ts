import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Game } from 'src/app/models/game.model';
import { Player } from 'src/app/models/player.model';
import { NextPlayerService } from 'src/app/services/next-player.service';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [
    ButtonModule,
  ],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.scss'
})
export class BottomComponent implements OnChanges {

  @Input() game: Game;
  @Input() indexCurrentPlayer: number;

  nextPlayer: Player;

  constructor(
    private nextPlayerService: NextPlayerService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.indexCurrentPlayer.currentValue !== changes.indexCurrentPlayer.previousValue) {
      this.nextPlayer = this.game.listPlayers[(this.indexCurrentPlayer + 1) % this.game.listPlayers.length];
    }
  }

  clickNextPlayer() {
    this.nextPlayerService.nextPlayer$.next();
  }

  clicRemoveLastShot() {
    if (this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].dart3 !== undefined) {
      this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].dart3 = undefined;
      this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].scoreDart3 = 0;
    } else if (this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].dart2 !== undefined) {
      this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].dart2 = undefined;
      this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].scoreDart2 = 0;
    } else {
      this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].dart1 = undefined;
      this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].scoreDart1 = 0;
    }
  }
}
