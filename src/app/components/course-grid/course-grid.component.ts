import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-course-grid",
  templateUrl: "./course-grid.component.html",
  styleUrls: ["./course-grid.component.css"]
})
export class CourseGridComponent implements OnInit {
  courses = [];
  loading: boolean;
  constructor(private service: CourseService) {
    this.loading = true;
  }

  ngOnInit() {
    this.service.findAllCourses().then(courses => {
      this.courses = courses;
      this.loading = false;
      console.log(courses);
    });
  }
}
