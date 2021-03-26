import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-table-title',
  templateUrl: './table-title.component.html',
  styleUrls: ['./table-title.component.css']
})
export class TableTitleComponent implements OnInit {
  title:string = "";

  constructor(private location: Location) {  }

  ngOnInit(): void {
    if (this.location.path() === "/projects") {
      this.title = "Project List";
    } else if (this.location.path() === "/deliverables") {
      this.title = "Deliverables List"
    }
    
  }

}
