import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-pad',
  standalone: true,
  imports: [],
  templateUrl: './pad.component.html',
  styleUrl: './pad.component.scss'
})
export class PadComponent {

  @Input() game: Game;
  @Input() indexCurrentPlayer: number;

  scoreDart(score: number) {
    if (!this.game.scoreBoards[this.indexCurrentPlayer].throws[0].dart1) {
      this.game.scoreBoards[this.indexCurrentPlayer].throws[0].dart1 = score + '';
      this.game.scoreBoards[this.indexCurrentPlayer].throws[0].scoreDart1 = score;
    } else if (!this.game.scoreBoards[this.indexCurrentPlayer].throws[0].dart2) {
      this.game.scoreBoards[this.indexCurrentPlayer].throws[0].dart2 = score + '';
      this.game.scoreBoards[this.indexCurrentPlayer].throws[0].scoreDart2 = score;
    } else {
      this.game.scoreBoards[this.indexCurrentPlayer].throws[0].dart3 = score + '';
      this.game.scoreBoards[this.indexCurrentPlayer].throws[0].scoreDart3 = score;
    }
  }

}
