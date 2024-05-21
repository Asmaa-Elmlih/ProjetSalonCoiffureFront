import { TestBed } from '@angular/core/testing';

import { CoiffeurService } from './coiffeur.service';

describe('CoiffeurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoiffeurService = TestBed.get(CoiffeurService);
    expect(service).toBeTruthy();
  });
});
