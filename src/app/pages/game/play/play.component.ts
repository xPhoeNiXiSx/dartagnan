import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { PadComponent } from '../pad/pad.component';
import { PlayerComponent } from '../player/player.component';
import { BottomComponent } from '../bottom/bottom.component';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [
    ToolbarComponent,
    PadComponent,
    PlayerComponent,
    BottomComponent,
  ],
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  player1: Player;
  player2: Player;

  constructor() { }

  ngOnInit(): void {
    this.player1 = new Player();
    this.player1.idPlayer = 1;
    this.player1.nom = 'Fraquet';
    this.player1.prenom = 'Thomas';
    this.player1.picture = 'user1.png';
    
    this.player2 = new Player();
    this.player1.idPlayer = 2;
    this.player2.nom = 'Semelin';
    this.player2.prenom = 'Jérémie';
    this.player2.picture = 'user2.png';
  }

}
