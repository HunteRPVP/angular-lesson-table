import { Injectable } from '@angular/core';
import { RatingComponent } from './rating/rating.component';

import * as lessons from '../assets/lessons.json';
import * as ratingRecords from '../assets/ratings.json';

@Injectable({
  providedIn: 'root'
})
export class LessonRatingsService {

  ratingRecords: RatingComponent[] = [];

  constructor() { 
    var ratingRecordTemp: RatingComponent[] = [];
    for (var i = 0; i < ratingRecords.students.length; i++) {
      ratingRecordTemp.push(new RatingComponent);

      var lessonsArr = [];
      for (var j = 0; j < ratingRecords.students[i].ratings.length; j++) {
        lessonsArr.push(ratingRecords.students[i].ratings[j].lesson_num);
      }

      var ratingsArr = [];
      for (var j = 0; j < ratingRecords.students[i].ratings.length; j++) {
        ratingsArr.push(ratingRecords.students[i].ratings[j].rating);
      }

      ratingRecordTemp[i].createRatingRecord(ratingRecords.students[i].fio,
        lessonsArr,
        ratingsArr
        );
      this.addRatingRecord(ratingRecordTemp[i]);
    }
  }

  addRatingRecord(ratingRecord: RatingComponent): void {
    this.ratingRecords.push(ratingRecord);
  }

  addRatingRecordSep(fio: string): void {
    var ratingRecord: RatingComponent = new RatingComponent;
    ratingRecord.createRatingRecord(fio, [1,2,3], [1,1,1]);
    this.ratingRecords.push(ratingRecord);
    // lessons.lessons.push(
    //   {
    //     "number": num,
    //     "date": date,
    //     "theme": theme,
    //     "homework": hw,
    //     "note": note
    //   }
    // )
  }

  getLessonRatings(): RatingComponent[] {
    return this.ratingRecords;
  }
}
