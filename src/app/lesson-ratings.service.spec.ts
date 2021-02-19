import { TestBed } from '@angular/core/testing';

import { LessonRatingsService } from './lesson-ratings.service';

describe('LessonRatingsService', () => {
  let service: LessonRatingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonRatingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
