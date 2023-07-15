import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  showHeader$: BehaviorSubject<boolean>;
  constructor() {
    this.showHeader$ = new BehaviorSubject<boolean>(true);
  }
}
