import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

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

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'project', 'description', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
