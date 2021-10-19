import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GmapComponent } from './gmap/gmap.component';

const routes: Routes = [
  {
    path:"examples",
    data:{
      title:"example"
    },
    children:[
      {
        path:"gmap",
        data:{
          title:"gmap"
        },
        component: GmapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
