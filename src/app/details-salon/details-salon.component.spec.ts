import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSalonComponent } from './details-salon.component';

describe('DetailsSalonComponent', () => {
  let component: DetailsSalonComponent;
  let fixture: ComponentFixture<DetailsSalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
