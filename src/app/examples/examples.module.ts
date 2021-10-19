import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { GmapComponent } from './gmap/gmap.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    GmapComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    GoogleMapsModule
  ]
})
export class ExamplesModule { }
