import { TestBed, inject } from '@angular/core/testing';

import { RequestsendformService } from './requestsendform.service';

describe('RequestsendformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestsendformService]
    });
  });

  it('should be created', inject([RequestsendformService], (service: RequestsendformService) => {
    expect(service).toBeTruthy();
  }));
});
