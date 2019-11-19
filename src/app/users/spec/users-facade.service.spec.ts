import { TestBed } from '@angular/core/testing';

import { UsersFacadeService } from '../users-facade.service';

describe('UsersFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersFacadeService = TestBed.get(UsersFacadeService);
    expect(service).toBeTruthy();
  });
});
