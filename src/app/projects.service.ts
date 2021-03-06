import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IProject {
  project: string;
  id: number;
  description: string;
}

const dummyData: IProject[] = [
  {id: 1, project: 'Project 1', description: '1.0079'},
  {id: 2, project: 'Helium', description: '4.0026'},
  {id: 3, project: 'Lithium', description: '6.941'},
  {id: 4, project: 'Beryllium', description: '9.0122'},
  {id: 5, project: 'Boron', description: '10.811'},
  {id: 6, project: 'Carbon', description: '12.0107'},
  {id: 7, project: 'Nitrogen', description: '14.0067'},
  {id: 8, project: 'Oxygen', description: '15.9994'},
  {id: 9, project: 'Fluorine', description: '18.9984'},
  {id: 10, project: 'Neon', description: '20.1797'},
  {id: 10, project: 'Neon', description: '20.1797'},
  {id: 10, project: 'Neon', description: '20.1797'},
  {id: 10, project: 'Neon', description: '20.1797'},
  {id: 10, project: 'Neon', description: '20.1797'},
  {id: 10, project: 'Neon', description: '20.1797'},
  {id: 10, project: 'Neon', description: '20.1797'},
  {id: 10, project: 'Neon', description: '20.1797'},
]

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects():IProject[] {
    return dummyData
  }

  AddProject() {
    dummyData.push({id: 666, project: '666', description: '666'});
  }

  add(): Observable<IProject[]> {
    dummyData.push({id: 666, project: '666', description: '666'});
    return of(dummyData);
  }
}
