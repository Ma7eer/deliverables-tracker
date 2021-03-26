import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { IProject, ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'project', 'description', 'action'];
  ELEMENT_DATA:IProject[] = this._projectsList.getProjects();
  dataSource = new MatTableDataSource<IProject>(this.ELEMENT_DATA);

  constructor(private _projectsList: ProjectsService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
