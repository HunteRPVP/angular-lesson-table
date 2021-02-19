import { Injectable } from '@angular/core';
import { LessonRecordComponent } from './lesson-record/lesson-record.component';

import * as lessons from '../assets/lessons.json';

@Injectable({
  providedIn: 'root'
})
export class LessonRecordsService {

  lessonRecords: LessonRecordComponent[] = [];

  constructor() { 
    var lessonRecordTemp: LessonRecordComponent[] = [];
    for (var i = 0; i < lessons.lessons.length; i++) {
      lessonRecordTemp.push(new LessonRecordComponent);
      lessonRecordTemp[i].createLessonRecord(lessons.lessons[i]?.number,
        new Date (lessons.lessons[i]?.date),
        lessons.lessons[i]?.theme,
        lessons.lessons[i]?.homework,
        lessons.lessons[i]?.note);
      this.addLessonRecord(lessonRecordTemp[i]);
    }
  }

  addLessonRecord(lessonRecord: LessonRecordComponent): void {
    this.lessonRecords.push(lessonRecord);
  }

  addLessonRecordSep(num: number, date: string, theme: string, hw: string, note: string): void {
    var lessonRecord: LessonRecordComponent = new LessonRecordComponent;
    date = date.substring(6, 10) + '-' + date.substring(3, 5) + '-' + date.substring(0, 2) + 'T09:00:00';
    lessonRecord.createLessonRecord(num, new Date(date), theme, hw, note);
    this.lessonRecords.push(lessonRecord);
    lessons.lessons.push(
      {
        "number": num,
        "date": date,
        "theme": theme,
        "homework": hw,
        "note": note
      }
    )
  }

  getLessonRecords(): LessonRecordComponent[] {
    return this.lessonRecords;
  }
}
