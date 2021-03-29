import { Component, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { IProject, ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'project', 'description', 'action'];
  dataSource = new MatTableDataSource<IProject>(this._projectsList.getProjects());
  name: string = "test";

  constructor(private _projectsList: ProjectsService, public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog():void {
    const dialogRef = this.dialog.open(AddNewProjectDialogBox, {
      width: '250px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    // console.log("open")
    // this._projectsList.add().subscribe(data => {
    //   console.log(data);
    //   this.dataSource = new MatTableDataSource<IProject>(data);
    // });
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
}

export interface DialogFormData {
  projectName: string;
  projectDescription: string;
}

@Component({
  selector: 'add-project-dialog-box',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})

export class AddNewProjectDialogBox {
  constructor(
    public dialogRef: MatDialogRef<ProjectTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogFormData) {}

    handleAddNewProjectFormSubmit():void {
      console.log('submitted')
      // console.log(x)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}