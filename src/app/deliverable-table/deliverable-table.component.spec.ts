import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverableTableComponent } from './deliverable-table.component';

describe('DeliverableTableComponent', () => {
  let component: DeliverableTableComponent;
  let fixture: ComponentFixture<DeliverableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverableTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
