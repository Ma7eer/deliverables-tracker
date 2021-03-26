import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProjectsComponent } from './view-projects/view-projects.component'

const routes: Routes = [
  {
    path: 'projects', component: ViewProjectsComponent
  },
  {
    path: '', redirectTo: '/projects', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
