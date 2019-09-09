import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-inner-page',
  templateUrl: './inner-page.component.html',
  styleUrls: ['./inner-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerPageComponent {
  // constructor(private location: Location) { }

  // public goBack(): void {
  //   this.location.back();
  // }
}
