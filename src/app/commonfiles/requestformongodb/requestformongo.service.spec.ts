import { TestBed, inject } from '@angular/core/testing';

import { RequestformongoService } from './requestformongo.service';

describe('RequestformobgoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestformongoService]
    });
  });

  it('should be created', inject([RequestformongoService], (service: RequestformongoService) => {
    expect(service).toBeTruthy();
  }));
});
