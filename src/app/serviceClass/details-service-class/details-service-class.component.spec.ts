import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsServiceClassComponent } from './details-service-class.component';

describe('DetailsServiceClassComponent', () => {
  let component: DetailsServiceClassComponent;
  let fixture: ComponentFixture<DetailsServiceClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsServiceClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsServiceClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
