import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from "@angular/common";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { DeliverablesService, IDeliverables } from '../deliverables.service';

@Component({
  selector: 'app-deliverable-table',
  templateUrl: './deliverable-table.component.html',
  styleUrls: ['./deliverable-table.component.css']
})
export class DeliverableTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'deliverable', 'status'];
  dataSource = new MatTableDataSource<IDeliverables>(this._deliverablesList.getDeliverables());

  constructor(private _deliverablesList:DeliverablesService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
