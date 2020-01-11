import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-subject-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamsComponent {
  public files: FileList = null;

  public onNewFile(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    this.files = inputElement.files;
  }

  public getFileSize(file: File): string {
    const fSExt = ['Bytes', 'KB', 'MB', 'GB'];
    let { size } = file;
    let i = 0;

    while (size > 900) {
      size /= 1024;
      i++;
    }

    return `${(Math.round(size * 100) / 100)} ${fSExt[i]}`;
  }
}
