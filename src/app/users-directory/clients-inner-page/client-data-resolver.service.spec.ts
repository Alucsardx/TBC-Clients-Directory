/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientDataResolverService } from './client-data-resolver.service';

describe('Service: ClientDataResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientDataResolverService]
    });
  });

  it('should ...', inject([ClientDataResolverService], (service: ClientDataResolverService) => {
    expect(service).toBeTruthy();
  }));
});
