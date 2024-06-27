import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent {
  @Input() public isOpen = false;

  public closeScore():void {
    this.isOpen = false;
  }

}
