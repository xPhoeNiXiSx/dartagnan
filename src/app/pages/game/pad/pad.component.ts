import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-pad',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pad.component.html',
  styleUrl: './pad.component.scss'
})
export class PadComponent {

  @Input() game: Game;
  @Input() indexCurrentPlayer: number;

  isDouble: boolean = false;
  isTriple: boolean = false;

  scoreDart(score: number) {
    let resultDart = score + '';

    if (score >= 1 && score <= 20) {
      if (this.isDouble) {
        resultDart = 'D' + resultDart;
        score = score * 2;
      } else if (this.isTriple) {
        resultDart = 'T' + resultDart;
        score = score * 3;
      }
    } else if (score === 50) {
      resultDart = 'Bull';
    } else if (score === 0) {
      resultDart = 'X';
    }

    if (!this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].dart1) {
      this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].dart1 = resultDart;
      this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].scoreDart1 = score;
    } else if (!this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].dart2) {
      this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].dart2 = resultDart;
      this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].scoreDart2 = score;
    } else if (!this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].dart3) {
      this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].dart3 = resultDart;
      this.game.scoreBoards[this.indexCurrentPlayer].throws[this.game.numberRound].scoreDart3 = score;
    }

    this.isDouble = false;
    this.isTriple = false;
  }
}
