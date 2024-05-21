import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceClassComponent } from './add-service-class.component';

describe('AddServiceClassComponent', () => {
  let component: AddServiceClassComponent;
  let fixture: ComponentFixture<AddServiceClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
