import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplebarAngularModule } from 'simplebar-angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        SimplebarAngularModule,
        HomeRoutingModule,
    ]
})
export class HomeModule { }
