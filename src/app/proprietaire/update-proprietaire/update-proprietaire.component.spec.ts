import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProprietaireComponent } from './update-proprietaire.component';

describe('UpdateProprietaireComponent', () => {
  let component: UpdateProprietaireComponent;
  let fixture: ComponentFixture<UpdateProprietaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProprietaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
