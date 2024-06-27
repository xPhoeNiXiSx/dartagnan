import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { PadComponent } from '../pad/pad.component';
import { PlayerComponent } from '../player/player.component';
import { BottomComponent } from '../bottom/bottom.component';
import { ScoreComponent } from '../score/score.component';

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

  constructor() { }

  ngOnInit(): void {
  }

  public openScore(): void {
    this.isScoreOpen = true;
  }

}
