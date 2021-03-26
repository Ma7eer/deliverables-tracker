import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-title',
  templateUrl: './table-title.component.html',
  styleUrls: ['./table-title.component.css']
})
export class TableTitleComponent implements OnInit {
  tableTitle:string = "";
  projectName:string|null = "";

  constructor(private location: Location, private route: ActivatedRoute,) {  }

  ngOnInit(): void {
    if (this.location.path() === "/projects") {
      this.tableTitle = "Project List";
    } else if (this.location.path().includes("/deliverables") ) {
      this.projectName = this.route.snapshot.paramMap.get("project")
      this.tableTitle = `Deliverables List: ${this.projectName}`
    }
    
  }

}
