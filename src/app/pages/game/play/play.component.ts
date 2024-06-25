import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { PadComponent } from '../pad/pad.component';
import { PlayerComponent } from '../player/player.component';
import { BottomComponent } from '../bottom/bottom.component';

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

  constructor() { }

  ngOnInit(): void {
  }

}
