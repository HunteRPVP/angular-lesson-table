import { Component, Input } from '@angular/core';
import { LessonRatingsService } from './lesson-ratings.service';
import { LessonRecordComponent } from './lesson-record/lesson-record.component';
import { LessonRecordsService } from './lesson-records.service';
import { RatingComponent } from './rating/rating.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lesson-table';

  lessonRecordsService: LessonRecordsService = new LessonRecordsService;
  
  lessonRecords: LessonRecordComponent[] = [];

  ratingRecordsService: LessonRatingsService = new LessonRatingsService;
  ratingRecords: RatingComponent[] = [];

  ngOnInit() {
    this.lessonRecords = this.lessonRecordsService.getLessonRecords();
    this.ratingRecords = this.ratingRecordsService.getLessonRatings();
  }

  deleteLessonRecord(num: string) {
    this.lessonRecords.splice(parseInt(num) - 1 , 1);
    for(var i = this.lessonRecords.length - 1; i > parseInt(num) - 2; i--) {
      this.lessonRecords[i].num -= 1;
    }
    for(var i = 0; i < this.ratingRecords.length; i++) {
      this.ratingRecords[i].ratings.splice(parseInt(num) - 1, 1);
      this.ratingRecords[i].lessons.splice(parseInt(num) - 1, 1);
      this.ratingRecords[i].setAvgRound();
      this.ratingRecords[i].setAvgRoundInt();
      console.log(this.ratingRecords[i].lessons);
      console.log(this.ratingRecords[i].ratings);
    }
  }
}
