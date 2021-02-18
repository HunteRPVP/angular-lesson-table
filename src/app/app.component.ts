import { Component } from '@angular/core';
import { LessonRecordComponent } from './lesson-record/lesson-record.component';
import { LessonRecordsService } from './lesson-records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lesson-table';

  lessonRecordsService: LessonRecordsService = new LessonRecordsService;
  lessonRecords: LessonRecordComponent[] = [new LessonRecordComponent];

  ngOnInit() {
    this.lessonRecords = this.lessonRecordsService.getLessonRecords();
  }
}
