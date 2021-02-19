import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-lesson-record]',
  templateUrl: './lesson-record.component.html',
  styleUrls: ['./lesson-record.component.css']
})
export class LessonRecordComponent implements OnInit {

  num: number = 0;
  date: Date = new Date();
  theme: string = '';
  hw: string = '';
  note: string = '';

  @Input()
  lessonRecord: LessonRecordComponent | undefined;

  @Output()
  delete: EventEmitter<string> = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }

  setNum(num: number): void {
    this.num = num;
  }

  setDate(date: Date): void {
    this.date = date;
  }

  setTheme(theme: string): void {
    this.theme = theme;
  }

  setHW(hw: string): void {
    this.hw = hw;
  }

  setNote(note: string): void {
    this.note = note;
  }

  createLessonRecord(num: number, date: Date, theme: string, hw: string, note: string): void {
    this.setNum(num);
    this.setDate(date);
    this.setTheme(theme);
    this.setHW(hw);
    this.setNote(note);
  }

  deleteMe() {
    this.delete.emit(this.lessonRecord.num.toString());
  }

}
