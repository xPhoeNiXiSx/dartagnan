import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnChanges {

  @Input() game: Game;
  @Input() indexCurrentPlayer: number;

  currentPlayer: Player;
  rankCurrentPlayer: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.indexCurrentPlayer.currentValue !== changes.indexCurrentPlayer.previousValue) {
      this.currentPlayer = this.game.listPlayers[this.indexCurrentPlayer];

      this.getRankCurrentPlayer();
    }
  }

  getRankCurrentPlayer() {
    const sortedScores = [...this.game.listScores].sort();

    for (const [index, score] of sortedScores.entries()) {
      if (score === this.game.listScores[this.indexCurrentPlayer]) {
        this.rankCurrentPlayer = index + 1;
        break;
      } else {
        this.rankCurrentPlayer = 0;
      }
    }
  }
}
