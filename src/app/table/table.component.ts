import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from "@angular/common";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private location: Location) { 
    if (this.location.path() === "/projects") {
      this.displayedColumns = ['id', 'project', 'description', 'action'];
    } else if (this.location.path() === "/deliverables") {
      this.displayedColumns = ['id', 'project', 'description', 'action'];
    }
   }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface PeriodicElement {
  project: string;
  id: number;
  description: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, project: 'Hydrogen', description: 1.0079},
  {id: 2, project: 'Helium', description: 4.0026},
  {id: 3, project: 'Lithium', description: 6.941},
  {id: 4, project: 'Beryllium', description: 9.0122},
  {id: 5, project: 'Boron', description: 10.811},
  {id: 6, project: 'Carbon', description: 12.0107},
  {id: 7, project: 'Nitrogen', description: 14.0067},
  {id: 8, project: 'Oxygen', description: 15.9994},
  {id: 9, project: 'Fluorine', description: 18.9984},
  {id: 10, project: 'Neon', description: 20.1797},
  {id: 10, project: 'Neon', description: 20.1797},
  {id: 10, project: 'Neon', description: 20.1797},
  {id: 10, project: 'Neon', description: 20.1797},
  {id: 10, project: 'Neon', description: 20.1797},
  {id: 10, project: 'Neon', description: 20.1797},
  {id: 10, project: 'Neon', description: 20.1797},
  {id: 10, project: 'Neon', description: 20.1797},
];