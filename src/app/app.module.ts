import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {registerLocaleData} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
