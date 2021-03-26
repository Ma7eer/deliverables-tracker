import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-table-title',
  templateUrl: './table-title.component.html',
  styleUrls: ['./table-title.component.css']
})
export class TableTitleComponent implements OnInit {
  title:string = "";

  constructor(private route: ActivatedRoute, private location: Location) {  }

  ngOnInit(): void {
    if (this.location.path() === "/projects") {
      this.title = "Project List";
    } else if (this.location.path() === "/deliverables") {
      this.title = "Deliverables List"
    }
    
  }

}
