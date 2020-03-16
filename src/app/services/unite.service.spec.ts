import { TestBed, inject } from '@angular/core/testing';

import { UniteService } from './unite.service';

describe('UniteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniteService]
    });
  });

  it('should be created', inject([UniteService], (service: UniteService) => {
    expect(service).toBeTruthy();
  }));
});
