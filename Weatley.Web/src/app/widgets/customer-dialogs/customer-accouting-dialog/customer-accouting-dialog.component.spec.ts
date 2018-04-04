import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccoutingDialogComponent } from './customer-accouting-dialog.component';

describe('CustomerAccoutingDialogComponent', () => {
  let component: CustomerAccoutingDialogComponent;
  let fixture: ComponentFixture<CustomerAccoutingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAccoutingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccoutingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
