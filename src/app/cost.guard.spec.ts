import { TestBed } from '@angular/core/testing';

import { CostGuard } from './cost.guard';

describe('CostGuard', () => {
  let guard: CostGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CostGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
