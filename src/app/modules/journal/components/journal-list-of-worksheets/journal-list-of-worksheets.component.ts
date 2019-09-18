import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocalStorageService } from '@services/local-storage.service';

import { LocalStorageItems } from '@constants';
import { IWorksheet } from '@models/worksheet.models';
import { IFolder } from '@models/folder.models';
import { MAX_WORKSHEETS_COUNT, worksheets } from './journal-list-of-worksheets.config';

@Component({
  selector: 'app-journal-list-of-worksheets',
  templateUrl: './journal-list-of-worksheets.component.html',
  styleUrls: ['./journal-list-of-worksheets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalListOfWorksheetsComponent implements OnInit {
  public readonly worksheets: IWorksheet[] = worksheets;
  public folder: IFolder;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService
  ) { }

  public ngOnInit(): void {
    this.initFolder();
  }

  public get worksheetCanBeAdded(): boolean {
    return this.worksheets.length < MAX_WORKSHEETS_COUNT;
  }

  public renameCurrentFolder(): void {
    console.log('renameCurrentFolder');
  }

  public removeCurrentFolder(): void {
    console.log('removeCurrentFolder');
  }

  public returnBack(): void {
    this.router.navigate(['/journal']);
  }

  private initFolder(): void {
    const folders: IFolder[] = this.localStorageService
      .getAsObject<IFolder[]>(LocalStorageItems.Folders);

    const folderId: string = this.route.snapshot.paramMap.get('folderId');

    this.folder = folders.find((folder: IFolder) => {
      return folder.id === folderId;
    });
  }
}
