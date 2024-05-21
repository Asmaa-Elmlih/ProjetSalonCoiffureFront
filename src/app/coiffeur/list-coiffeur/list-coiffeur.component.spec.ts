import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoiffeurComponent } from './list-coiffeur.component';

describe('ListCoiffeurComponent', () => {
  let component: ListCoiffeurComponent;
  let fixture: ComponentFixture<ListCoiffeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoiffeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoiffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
