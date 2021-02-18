import { Injectable } from '@angular/core';
import { LessonRecordComponent } from './lesson-record/lesson-record.component';

@Injectable({
  providedIn: 'root'
})
export class LessonRecordsService {

  lessonRecords: LessonRecordComponent[] = [];

  constructor() { 
    var lessonRecord1: LessonRecordComponent = new LessonRecordComponent;
    lessonRecord1.createLessonRecord(1,
      new Date ('2021-02-13T09:00:00'),
      'Введение в Angular',
      'Ознакомиться с Angular',
      'Сделать домашнее задание до 20:00 текущего дня');
    this.addLessonRecord(lessonRecord1);
    var lessonRecord2: LessonRecordComponent = new LessonRecordComponent;
    lessonRecord2.createLessonRecord(2,
      new Date ('2021-02-14T09:00:00'),
      'Жизненный цикл компонентов',
      'Ознакомиться с жизненным циклом компонентов',
      'Сделать домашнее задание до 20:00 текущего дня');
    this.addLessonRecord(lessonRecord2);
    var lessonRecord3: LessonRecordComponent = new LessonRecordComponent;
    lessonRecord3.createLessonRecord(3,
      new Date ('2021-02-15T09:00:00'),
      'Пайпы',
      'Ознакомиться с пайпами',
      'Сделать домашнее задание до 20:00 текущего дня');
    this.addLessonRecord(lessonRecord3);
    var lessonRecord4: LessonRecordComponent = new LessonRecordComponent;
    lessonRecord4.createLessonRecord(4,
      new Date ('2021-02-16T09:00:00'),
      'Директивы',
      'Ознакомиться с директивами',
      'Сделать домашнее задание до 20:00 текущего дня');
    this.addLessonRecord(lessonRecord4);
    var lessonRecord5: LessonRecordComponent = new LessonRecordComponent;
    lessonRecord5.createLessonRecord(5,
      new Date ('2021-02-17T09:00:00'),
      'Синтаксический сахар',
      'Ознакомиться с использованием синтаксического сахара',
      'Сделать домашнее задание до 20:00 текущего дня');
    this.addLessonRecord(lessonRecord5);
  }

  addLessonRecord(lessonRecord: LessonRecordComponent): void {
    this.lessonRecords.push(lessonRecord);
  }

  getLessonRecords(): LessonRecordComponent[] {
    return this.lessonRecords;
  }
}
