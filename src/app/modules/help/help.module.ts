import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { HelpRoutingModule } from './help-routing.module';

import { HelpComponent } from './components/help/help.component';
import { HelpSectionsComponent } from './components/help-sections/help-sections.component';
import { HelpSectionCardComponent } from './components/help-section-card/help-section-card.component';

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
    InnerPageModule,
    HelpRoutingModule
  ],
  declarations: [
    HelpComponent,
    HelpSectionsComponent,
    HelpSectionCardComponent,
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