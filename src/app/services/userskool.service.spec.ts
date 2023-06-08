import { TestBed } from '@angular/core/testing';

import { UserskoolService } from './userskool.service';

describe('UserskoolService', () => {
  let service: UserskoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserskoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
