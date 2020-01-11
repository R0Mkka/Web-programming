import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatTooltipModule } from '@angular/material';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { HelpRoutingModule } from './help-routing.module';

import { HelpComponent } from './components/help/help.component';
import { HelpSectionsComponent } from './components/help-sections/help-sections.component';
import { HelpSectionCardComponent } from './components/help-section-card/help-section-card.component';

import { ChangeWeekColorComponent } from './schedule/change-week-color/change-week-color.component';
import { EditScheduleItemComponent } from './schedule/edit-schedule-item/edit-schedule-item.component';
import { ClearScheduleComponent } from './schedule/clear-schedule/clear-schedule.component';
import { CreateFolderComponent } from './journal/create-folder/create-folder.component';
import { RemoveFolderComponent } from './journal/remove-folder/remove-folder.component';
import { EditFolderNameComponent } from './journal/edit-folder-name/edit-folder-name.component';
import { EditFolderAccessTypeComponent } from './journal/edit-folder-access-type/edit-folder-access-type.component';
import { WorkInsideFolderComponent } from './journal/work-inside-folder/work-inside-folder.component';
import { AddStudentReviewComponent } from './student-reviews/add/add-student-review.component';
import { RemoveStudentReviewComponent } from './student-reviews/remove/remove-student-review.component';

import { ButtonBuildingBlockComponent } from './building-blocks/button/button.component';
import { ImageBuildingBlockComponent } from './building-blocks/image/image.component';
import { LinkBuildingBlockComponent } from './building-blocks/link/link.component';
import { NoteBuildingBlockComponent } from './building-blocks/note/note.component';
import { ParagraphBuildingBlockComponent } from './building-blocks/paragraph/paragraph.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    InnerPageModule,
    HelpRoutingModule
  ],
  declarations: [
    HelpComponent,
    HelpSectionsComponent,
    HelpSectionCardComponent,
    ChangeWeekColorComponent,
    EditScheduleItemComponent,
    ClearScheduleComponent,
    CreateFolderComponent,
    RemoveFolderComponent,
    EditFolderNameComponent,
    EditFolderAccessTypeComponent,
    WorkInsideFolderComponent,
    AddStudentReviewComponent,
    RemoveStudentReviewComponent,
    ButtonBuildingBlockComponent,
    ImageBuildingBlockComponent,
    LinkBuildingBlockComponent,
    NoteBuildingBlockComponent,
    ParagraphBuildingBlockComponent
  ],
  exports: []
})
export class HelpModule { }
