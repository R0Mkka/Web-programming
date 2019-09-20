import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ISpinnerState } from '@store/models/spinner.models';

@Component({
  selector: 'app-inner-page',
  templateUrl: './inner-page.component.html',
  styleUrls: ['./inner-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerPageComponent {
  @Input()
  public useDivider = false;

  @Select(state => state.spinner)
  public spinnerState$: Observable<ISpinnerState>;
}
