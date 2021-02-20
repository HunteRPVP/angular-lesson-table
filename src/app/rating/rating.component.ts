import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { LessonRecordComponent } from '../lesson-record/lesson-record.component';

@Component({
  selector: '[app-rating]',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  fio: string = 'asd';
  lessons: number [] = [1,2,3];
  ratings: number[] = [1,2,3,4];
  avgRound: number = 0;
  avgRoundInt: number = 0;

  @Input()
  lessonRecords: LessonRecordComponent[] = [];

  @Input()
  rating: RatingComponent | undefined;

  @Output()
  delete: EventEmitter<string> = new EventEmitter();

  constructor() { 
    this.rating?.createRatingRecord;
  }

  ngOnInit() {
  }

  setFio(fio: string): void {
    this.fio = fio;
  }

  setLessons(lessons: number[]): void {
    this.lessons = lessons;
  }

  setRatings(ratings: number[]): void {
    this.ratings = ratings;
  }

  setAvgRound(): void {
    this.avgRound = Math.round((this.ratings.reduce((a,b) => a + b, 0) / this.ratings.length) * 100) / 100;
  }

  setAvgRoundInt(): void {
    this.avgRoundInt = Math.round(this.ratings.reduce((a,b) => a + b, 0) / this.ratings.length);
  }

  createRatingRecord(fio: string, lessons: number[], ratings: number[]): void {
    this.setFio(fio);
    this.setLessons(lessons);
    this.setRatings(ratings);
    this.setAvgRound();
    this.setAvgRoundInt();
  }

  OnChange(lNum: number, changedRating: string): void {
    this.rating.ratings[lNum-1] = parseInt(changedRating);
    this.rating.setAvgRound();
    this.rating.setAvgRoundInt();
  }

  deleteMe() {
    this.delete.emit(this.rating.fio);
  }

}
