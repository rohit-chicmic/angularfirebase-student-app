import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBulkStudentsComponent } from './add-bulk-students.component';

describe('AddBulkStudentsComponent', () => {
  let component: AddBulkStudentsComponent;
  let fixture: ComponentFixture<AddBulkStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBulkStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBulkStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
