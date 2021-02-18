import { TestBed } from '@angular/core/testing';

import { LessonRecordsService } from './lesson-records.service';

describe('LessonRecordsService', () => {
  let service: LessonRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
