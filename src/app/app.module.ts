import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ViewDocumentComponent } from './view-document/view-document.component';
import { HighLightedSectionComponent } from './view-document/high-lighted-section/high-lighted-section.component';
import { DocumentSearchBoxComponent } from './view-document/document-search-box/document-search-box.component';
import { DocumentSearchIconComponent } from './view-document/document-search-icon/document-search-icon.component';
import { PageNavigationBarComponent } from './view-document/page-navigation-bar/page-navigation-bar.component';
import { PageDetailComponent } from './view-document/page-navigation-bar/page-detail/page-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ViewDocumentComponent,
    HighLightedSectionComponent,
    DocumentSearchBoxComponent,
    DocumentSearchIconComponent,
    PageNavigationBarComponent,
    PageDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimplebarAngularModule,
    ToastrModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
