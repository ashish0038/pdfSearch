import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDocumentRoutingModule } from './view-document-routing.module';
import { ViewDocumentComponent } from './view-document.component';
import { HighLightedSectionComponent } from './high-lighted-section/high-lighted-section.component';
import { DocumentSearchBoxComponent } from './document-search-box/document-search-box.component';
import { DocumentSearchIconComponent } from './document-search-icon/document-search-icon.component';
import { PageNavigationBarComponent } from './page-navigation-bar/page-navigation-bar.component';
import { PageDetailComponent } from './page-navigation-bar/page-detail/page-detail.component';

@NgModule({
    declarations: [
        ViewDocumentComponent,
        HighLightedSectionComponent,
        DocumentSearchBoxComponent,
        DocumentSearchIconComponent,
        PageNavigationBarComponent,
        PageDetailComponent,
    ],
    imports: [
        CommonModule,
        ViewDocumentRoutingModule
    ]
})
export class ViewDocumentModule { }
