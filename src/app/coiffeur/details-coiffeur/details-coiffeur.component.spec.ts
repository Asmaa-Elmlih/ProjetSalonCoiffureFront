import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCoiffeurComponent } from './details-coiffeur.component';

describe('DetailsCoiffeurComponent', () => {
  let component: DetailsCoiffeurComponent;
  let fixture: ComponentFixture<DetailsCoiffeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCoiffeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCoiffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
