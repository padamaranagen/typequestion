import { TestBed } from '@angular/core/testing';

import { EiddoConfigService } from './eiddo-config.service';

describe('EiddoConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EiddoConfigService = TestBed.get(EiddoConfigService);
    expect(service).toBeTruthy();
  });
});
