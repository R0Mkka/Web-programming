import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class RouteChangeWatcherService {
  public routeChanged$: Subject<void> = new Subject<void>();

  constructor(
    private readonly router: Router
  ) {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationStart)
    ).subscribe((_: NavigationStart) => {
      this.routeChanged$.next();
    });
  }
}
