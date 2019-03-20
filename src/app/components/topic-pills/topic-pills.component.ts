import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TopicService } from "src/app/services/topic.service";

@Component({
  selector: "app-topic-pills",
  templateUrl: "./topic-pills.component.html",
  styleUrls: ["./topic-pills.component.css"]
})
export class TopicPillsComponent implements OnInit {
  moduleId = null;
  courseId = null;
  lessonId = null;
  topics = [];
  selectedTopic = { id: "" };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TopicService
  ) {
    this.route.params.subscribe(params => {
      this.setParams(params);
    });
  }

  selectTopic = topic => {
    this.selectedTopic = topic;
    this.router.navigate([
      "/",
      "course",
      this.courseId,
      "module",
      this.moduleId,
      "lesson",
      this.lessonId,
      "widget"
    ]);
  };

  setParams(params) {
    this.courseId = params["courseId"];
    this.moduleId = params["moduleId"];
    this.lessonId = params["lessonId"];
    if (this.courseId != null && this.moduleId != null && this.lessonId != null)
      this.loadTopics(this.lessonId);
  }

  loadTopics(lessonId) {
    this.service
      .findTopicsForLesson(lessonId)
      .then(topics => (this.topics = topics));
  }

  ngOnInit() {}
}
