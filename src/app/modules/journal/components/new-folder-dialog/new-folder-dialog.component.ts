import { Component, ChangeDetectionStrategy, Inject, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FoldersService } from '../../services/folders.service';
import { NewFolderDialogController } from './new-folder-dialog.controller';

import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';
import { newFolderFormConfig } from './new-folder-dialog.config';
import { ICustomField, ControlTypes } from '@models/forms';
import { AccessTypes, AccessTypesText } from '@models/folder.models';

@Component({
  selector: 'app-new-folder-dialog',
  templateUrl: './new-folder-dialog.component.html',
  styleUrls: ['./new-folder-dialog.component.scss'],
  providers: [NewFolderDialogController],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewFolderDialogComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('form', { static: false }) public readonly formRef: ElementRef;

  public ControlTypes = ControlTypes;
  public newFolderForm: FormGroup;
  public newFolderFormConfig: ICustomField[] = newFolderFormConfig;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly foldersService: FoldersService,
    private readonly keyboardController: NewFolderDialogController,
    @Inject(DialogOverlayRef) public readonly dialogRef: DialogOverlayRef
  ) { }

  public ngOnInit(): void {
    this.initForm();
    this.keyboardController.initListeners(this);
  }

  public ngAfterViewInit(): void {
    this.setFirstControlFocus();
  }

  public ngOnDestroy(): void {
    this.keyboardController.destroyListeners();
  }

  public createFolder(): void {
    if (!this.newFolderForm.valid) {
      return;
    }

    // TODO: Отрефакторить эту часть кода
    const accessType = this.newFolderForm.get('folderAccessType').value === AccessTypesText.Private
      ? AccessTypes.Private
      : this.newFolderForm.get('folderAccessType').value === AccessTypesText.ReadWrite
        ? AccessTypes.ReadWrite
        : AccessTypes.Read;

    this.foldersService.folderCreated$.next({
      name: this.newFolderForm.get('folderName').value,
      accessType,
      id: `folder-${Date.now().toString()}`,
      worksheets: []
    });

    this.dialogRef.close();
  }

  private initForm(): void {
    this.newFolderForm = this.formBuilder.group(
      this.newFolderFormConfig.reduce((previous, current) => ({
        ...previous,
        [current.control.name]: [current.control.initialValue, current.control.validators]
      }), {})
    );
  }

  private setFirstControlFocus(): void {
    const firstControl: HTMLInputElement = this.formRef.nativeElement
      .firstElementChild.querySelector('input');

    firstControl.select();
  }
}
