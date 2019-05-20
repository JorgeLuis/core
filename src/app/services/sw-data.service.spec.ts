import { TestBed } from '@angular/core/testing';

import { SwDataService } from './sw-data.service';

describe('SwDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwDataService = TestBed.get(SwDataService);
    expect(service).toBeTruthy();
  });
});
