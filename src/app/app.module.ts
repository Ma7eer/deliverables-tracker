import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TableTitleComponent } from './table-title/table-title.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ViewDeliverablesComponent } from './view-deliverables/view-deliverables.component';
import { ProjectTableComponent } from './project-table/project-table.component';
import { AddNewProjectDialogBox } from './project-table/project-table.component';
import { DeliverableTableComponent } from './deliverable-table/deliverable-table.component'

import { ProjectsService } from './projects.service';
import { DeliverablesService } from './deliverables.service';

@NgModule({
  declarations: [
    AppComponent,
    TableTitleComponent,
    ViewProjectsComponent,
    ViewDeliverablesComponent,
    ProjectTableComponent,
    DeliverableTableComponent,
    AddNewProjectDialogBox
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ProjectsService, DeliverablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
