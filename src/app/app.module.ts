import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableComponent } from './table/table.component';
import { TableTitleComponent } from './table-title/table-title.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ViewDeliverablesComponent } from './view-deliverables/view-deliverables.component'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableTitleComponent,
    ViewProjectsComponent,
    ViewDeliverablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
