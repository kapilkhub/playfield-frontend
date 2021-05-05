import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-teacher-student-display',
  templateUrl: './teacher-student-display.component.html',
  styleUrls: ['./teacher-student-display.component.css']
})
export class TeacherStudentDisplayComponent implements OnInit {
  @Input() person: any;

  constructor() {
  }

  ngOnInit() {
  }

}
