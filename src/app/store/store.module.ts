import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { SpinnerState } from './states/spinner.state';
import { FoldersState } from './states/folders.state';
import { WorksheetsState } from './states/worksheets.state';

@NgModule({
  imports: [
    NgxsModule.forRoot([
      SpinnerState,
      FoldersState,
      WorksheetsState
    ]),
    NgxsLoggerPluginModule.forRoot()
  ],
  exports: [
    NgxsModule,
    NgxsLoggerPluginModule
  ]
})
export class StoreModule { }
