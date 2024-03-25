import { TestBed } from '@angular/core/testing';

import { GetboxesService } from './getboxes.service';

describe('GetboxesService', () => {
  let service: GetboxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetboxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
