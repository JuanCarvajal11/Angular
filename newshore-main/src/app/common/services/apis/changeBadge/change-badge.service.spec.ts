import { TestBed } from '@angular/core/testing';

import { ChangeBadgeService } from './change-badge.service';

describe('ChangeBadgeService', () => {
  let service: ChangeBadgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeBadgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
