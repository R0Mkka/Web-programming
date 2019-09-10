import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-inner-page',
  templateUrl: './inner-page.component.html',
  styleUrls: ['./inner-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerPageComponent {
  @Input() public useDivider: boolean;
  // constructor(private location: Location) { }

  // public goBack(): void {
  //   this.location.back();
  // }
}
