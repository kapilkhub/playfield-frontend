import {Component, OnInit} from '@angular/core';
import {Teacher, Student} from './components/models/teacher-student';

@Component({
  selector: 'app-teacher-student-typescript',
  templateUrl: './teacher-student-typescript.component.html',
  styleUrls: ['./teacher-student-typescript.component.css']
})
export class TeacherStudentTypescriptComponent implements OnInit {
  teachers: Teacher[] = [
    new Teacher('Hanna', 'Schwarz', 39, 12),
    new Teacher('Tobias', 'Hint', 45, 18)
  ];
  students: Student[] = [
    new Student('Hanna', 'Schwarz', 39, 12),
    new Student('Tobias', 'Hint', 45, 18)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
