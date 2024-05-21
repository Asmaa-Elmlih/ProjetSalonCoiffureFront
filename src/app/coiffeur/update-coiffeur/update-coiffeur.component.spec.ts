import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoiffeurComponent } from './update-coiffeur.component';

describe('UpdateCoiffeurComponent', () => {
  let component: UpdateCoiffeurComponent;
  let fixture: ComponentFixture<UpdateCoiffeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCoiffeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCoiffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
