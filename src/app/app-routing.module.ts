import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfDetailsComponent } from './conf-details/conf-details.component';

const routes: Routes = [
  {path:'',component:ConfDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
  ConfDetailsComponent
]
