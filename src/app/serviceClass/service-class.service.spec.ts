import { TestBed } from '@angular/core/testing';

import { ServiceClassService } from './service-class.service';

describe('ServiceClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceClassService = TestBed.get(ServiceClassService);
    expect(service).toBeTruthy();
  });
});
