import { TestBed, inject } from '@angular/core/testing';

import { RestaurantRegionService } from './restaurant-region.service';

describe('RestaurantRegionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantRegionService]
    });
  });

  it('should be created', inject([RestaurantRegionService], (service: RestaurantRegionService) => {
    expect(service).toBeTruthy();
  }));
});
