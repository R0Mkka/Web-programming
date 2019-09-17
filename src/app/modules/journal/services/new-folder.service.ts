import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { IFolder } from '@models/folder.models';

@Injectable({
  providedIn: 'root'
})
export class NewFolderService {
  public readonly folderCreated$: Subject<IFolder> = new Subject<IFolder>();
}
