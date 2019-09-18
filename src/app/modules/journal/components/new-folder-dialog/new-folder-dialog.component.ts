import { Component, ChangeDetectionStrategy, Inject, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NewFolderService } from '../../services/new-folder.service';

import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';
import { newFolderFormConfig, AccessTypesText } from './new-folder-dialog.config';
import { ICustomField, ControlTypes } from '@models/forms';
import { AccessTypes } from '@models/folder.models';

@Component({
  selector: 'app-new-folder-dialog',
  templateUrl: './new-folder-dialog.component.html',
  styleUrls: ['./new-folder-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewFolderDialogComponent implements OnInit, AfterViewInit {
  @ViewChild('form', { static: false }) public readonly formRef: ElementRef;

  public ControlTypes = ControlTypes;
  public newFolderForm: FormGroup;
  public newFolderFormConfig: ICustomField[] = newFolderFormConfig;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly newFolderService: NewFolderService,
    @Inject(DialogOverlayRef) public readonly dialogRef: DialogOverlayRef
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public ngAfterViewInit(): void {
    this.setFirstControlFocus();
  }

  public createFolder(): void {
    // TODO: Отрефакторить эту часть кода
    const accessType = this.newFolderForm.get('folderAccessType').value === AccessTypesText.Private
      ? AccessTypes.Private
      : this.newFolderForm.get('folderAccessType').value === AccessTypesText.ReadWrite
        ? AccessTypes.ReadWrite
        : AccessTypes.Read;

    this.newFolderService.folderCreated$.next({
      name: this.newFolderForm.get('folderName').value,
      accessType,
      id: `folder-${Date.now().toString()}`
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
