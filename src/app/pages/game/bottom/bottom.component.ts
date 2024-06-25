import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

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

}
