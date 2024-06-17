import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.setLoading(true);
      } else if (event instanceof NavigationEnd || event instanceof NavigationError) {
        this.setLoading(false);
      }
    });
  }

  private setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }
}