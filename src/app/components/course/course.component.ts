import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  course = { title: "" };

  constructor(private route: ActivatedRoute, private service: CourseService) {}

  ngOnInit() {
    this.service
      .findCourseById(this.route.snapshot.paramMap.get("courseId"))
      .then(course => {
        this.course = course;
        console.log(course);
      });
  }
}
