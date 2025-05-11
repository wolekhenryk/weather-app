import { TestBed } from '@angular/core/testing';

import { SavedWeatherService } from './saved-weather.service';

describe('SavedWeatherService', () => {
  let service: SavedWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
