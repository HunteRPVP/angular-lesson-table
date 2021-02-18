import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonRecordComponent } from './lesson-record.component';

describe('LessonRecordComponent', () => {
  let component: LessonRecordComponent;
  let fixture: ComponentFixture<LessonRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
