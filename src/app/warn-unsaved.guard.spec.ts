import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { warnUnsavedGuard } from './warn-unsaved.guard';

describe('warnUnsavedGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => warnUnsavedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
