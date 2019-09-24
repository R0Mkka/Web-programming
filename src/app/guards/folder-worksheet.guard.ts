import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { WorksheetsService } from 'app/modules/journal/services/worksheets.service';

import { IWorksheet } from '@models/worksheet.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FolderWorksheetGuard implements CanActivateChild {
  constructor(
    private readonly router: Router,
    private readonly worksheetsService: WorksheetsService
  ) { }

  public canActivateChild(childRoute: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<boolean> {
    const { pathFromRoot } = childRoute;

    if (pathFromRoot[pathFromRoot.length - 1].url.length === 0) {
      return of(true);
    }

    const folderId: string = pathFromRoot[pathFromRoot.length - 2].paramMap.get('folderId');

    return this.worksheetsService.getWorksheets(folderId)
      .pipe(
        map((worksheets: IWorksheet[]) => {
          const worksheetId: string = childRoute.paramMap.get('worksheetId');
          const currentWorksheet: IWorksheet = worksheets.find((worksheet: IWorksheet) => worksheet.id === worksheetId);

          if (!currentWorksheet) {
            this.router.navigate(['journal', folderId]);

            return false;
          }

          return true;
        })
      );
  }
}
