import { TestBed } from '@angular/core/testing';

import { CharacterAPIService } from './character-api.service';

describe('CharacterAPIService', () => {
  let service: CharacterAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
