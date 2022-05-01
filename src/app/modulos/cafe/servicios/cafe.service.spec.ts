import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CafeService } from './cafe.service';

describe('CafeService', () => {
  let service: CafeService;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeService,{ provide: HttpClient, useValue: httpClientSpy }]
    });
    service = TestBed.inject(CafeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
