import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeliverablesComponent } from './view-deliverables.component';

describe('ViewDeliverablesComponent', () => {
  let component: ViewDeliverablesComponent;
  let fixture: ComponentFixture<ViewDeliverablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDeliverablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeliverablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
