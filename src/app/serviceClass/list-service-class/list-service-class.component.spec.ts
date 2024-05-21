import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceClassComponent } from './list-service-class.component';

describe('ListServiceClassComponent', () => {
  let component: ListServiceClassComponent;
  let fixture: ComponentFixture<ListServiceClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
