import { TestBed } from '@angular/core/testing';

import { Ng2SmartTableService } from './ng2-smart-table.service';

describe('Ng2SmartTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng2SmartTableService = TestBed.get(Ng2SmartTableService);
    expect(service).toBeTruthy();
  });
});
