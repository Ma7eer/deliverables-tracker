import { Injectable } from '@angular/core';

export interface IDeliverables {
  deliverable: string;
  id: number;
  status: number;
}

const dummyData: IDeliverables[] = [
  {id: 1, deliverable: 'Hydrogen', status: 1.0079},
  {id: 2, deliverable: 'Helium', status: 4.0026},
  {id: 3, deliverable: 'Lithium', status: 6.941},
  {id: 4, deliverable: 'Beryllium', status: 9.0122},
  {id: 5, deliverable: 'Boron', status: 10.811},
  {id: 6, deliverable: 'Carbon', status: 12.0107},
  {id: 7, deliverable: 'Nitrogen', status: 14.0067},
  {id: 8, deliverable: 'Oxygen', status: 15.9994},
  {id: 9, deliverable: 'Fluorine', status: 18.9984},
  {id: 10, deliverable: 'Neon', status: 20.1797},
  {id: 10, deliverable: 'Neon', status: 20.1797},
  {id: 10, deliverable: 'Neon', status: 20.1797},
  {id: 10, deliverable: 'Neon', status: 20.1797},
  {id: 10, deliverable: 'Neon', status: 20.1797},
  {id: 10, deliverable: 'Neon', status: 20.1797},
  {id: 10, deliverable: 'Neon', status: 20.1797},
  {id: 10, deliverable: 'Neon', status: 20.1797},
];

@Injectable({
  providedIn: 'root'
})
export class DeliverablesService {

  constructor() { }

  getDeliverables():IDeliverables[] {
    return dummyData
  }
}
