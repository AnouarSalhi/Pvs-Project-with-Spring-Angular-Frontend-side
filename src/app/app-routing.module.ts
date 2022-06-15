import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataPartieComponent } from './components/add-data-partie/add-data-partie.component';
import { AddPvComponent } from './components/add-pv/add-pv.component';
import { PvsComponent } from './components/pvs/pvs.component';

const routes: Routes = [
  {
    path:"pvs",
    component:PvsComponent
  }
  , {
    path:"addpv",
    component:AddPvComponent
  }
  , {
    path:"allpvs",
    component:PvsComponent
  }, {
    path:"addparties",
    component:AddDataPartieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
