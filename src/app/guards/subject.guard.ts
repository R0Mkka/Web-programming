import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { LocalStorageService } from '@services/local-storage.service';

import { LocalStorageItems } from '@constants';
import { ISubject } from '@models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectGuard implements CanActivate {
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const subjects: { [key: string]: ISubject } = this.localStorageService.getAsObject(LocalStorageItems.Subjects);
    const subjectName: string = route.paramMap.get('subject');

    if (!subjects[subjectName]) {
      this.router.navigateByUrl('/subjects');

      return false;
    }

    return true;
  }
}
