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
    this.player1.nom = 'Fraquet';
    this.player1.prenom = 'Thomas';
    this.player1.urlPicture = 'https://i.pinimg.com/280x280_RS/1e/24/b1/1e24b12cecdd0c081a1df42543830f28.jpg';
    
    this.player2 = new Player();
    this.player2.nom = 'Semelin';
    this.player2.prenom = 'Jérémie';
    this.player2.urlPicture = 'https://cdn.aviz.co/medias/pictures/1ee0c2cd-fa8c-6c32-a445-e3caf9693121-l.webp';
  }

}
