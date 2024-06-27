import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [
    ButtonModule,
  ],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.scss'
})
export class BottomComponent {

  @Input() nextPlayer: Player;

}
