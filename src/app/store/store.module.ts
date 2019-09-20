import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { SpinnerState } from './states/spinner.state';
import { FoldersState } from './states/folders.state';

@NgModule({
  imports: [
    NgxsModule.forRoot([
      SpinnerState,
      FoldersState
    ]),
    NgxsLoggerPluginModule.forRoot()
  ],
  exports: [
    NgxsModule,
    NgxsLoggerPluginModule
  ]
})
export class StoreModule { }
