import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceClassComponent } from './update-service-class.component';

describe('UpdateServiceClassComponent', () => {
  let component: UpdateServiceClassComponent;
  let fixture: ComponentFixture<UpdateServiceClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateServiceClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServiceClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
