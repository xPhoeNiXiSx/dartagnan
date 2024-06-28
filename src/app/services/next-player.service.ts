import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NextPlayerService {

  public nextPlayer$ = new Subject<void>();

  nextPlayer() {
    this.nextPlayer$.next();
  }
}
