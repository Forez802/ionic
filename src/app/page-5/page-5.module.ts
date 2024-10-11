import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page5PageRoutingModule } from './page-5-routing.module';

import { Page5Page } from './page-5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page5PageRoutingModule
  ],
  declarations: [Page5Page]
})
export class Page5PageModule {}
