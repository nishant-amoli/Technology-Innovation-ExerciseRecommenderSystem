import { TestBed } from '@angular/core/testing';

import { AdminAdvertisementService } from './admin-advertisement.service';

describe('AdminAdvertisementService', () => {
  let service: AdminAdvertisementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAdvertisementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
