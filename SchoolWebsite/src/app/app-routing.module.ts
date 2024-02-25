import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homescreenComponent } from './homescreen/homescreen.component';

const routes: Routes = [
  { path: "" , redirectTo:"/homescreen", pathMatch:"full", runGuardsAndResolvers: 'always'},
  { path: "homescreen", component:homescreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
