import { TestBed } from '@angular/core/testing';

import { ShaSignService } from './sha-sign.service';

describe('ShaSignService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShaSignService = TestBed.get(ShaSignService);
    expect(service).toBeTruthy();
  });
});
