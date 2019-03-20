import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LessonService } from "src/app/services/lesson.service";

@Component({
  selector: "app-lesson-tabs",
  templateUrl: "./lesson-tabs.component.html",
  styleUrls: ["./lesson-tabs.component.css"]
})
export class LessonTabsComponent implements OnInit {
  moduleId = null;
  courseId = null;
  lessons = [];
  selectedLesson = { id: "" };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LessonService
  ) {
    this.route.params.subscribe(params => {
      this.setParams(params);
    });
  }

  selectLesson = lesson => {
    this.selectedLesson = lesson;
    this.router.navigate([
      "/",
      "course",
      this.courseId,
      "module",
      this.moduleId,
      "lesson",
      lesson.id,
      "topic"
    ]);
  };

  setParams(params) {
    this.courseId = params["courseId"];
    this.moduleId = params["moduleId"];
    if (this.courseId != null && this.moduleId != null)
      this.loadLessons(this.courseId, this.moduleId);
  }

  loadLessons(courseId, moduleId) {
    this.courseId = courseId;
    this.moduleId = moduleId;
    const lessonIdPathVar = this.route.snapshot.paramMap.get("lessonId");
    this.service.findLessonsForModule(courseId, moduleId).then(lessons => {
      this.lessons = lessons;
      /* Color based on URL */
      if (lessonIdPathVar != null) {
        this.lessons.forEach(les => {
          if (les.id == lessonIdPathVar) {
            this.selectedLesson = les;
            console.log("selected Lesson: " + les.title);
          }
        });
      }
    });
  }

  ngOnInit() {}
}
