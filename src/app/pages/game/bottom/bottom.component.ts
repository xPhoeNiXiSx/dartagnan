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
  @Input() indexNextPlayer: number;

  nextPlayer: Player;

  constructor(
    private nextPlayerService: NextPlayerService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.indexNextPlayer.currentValue !== changes.indexNextPlayer.previousValue) {
      this.nextPlayer = this.game.listPlayers[this.indexNextPlayer];
    }
  }

  clickNextPlayer() {
    this.nextPlayerService.nextPlayer$.next();
  }

}
