import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { WidgetService } from "src/app/services/widget.service";

@Component({
  selector: "app-widget-list",
  templateUrl: "./widget-list.component.html",
  styleUrls: ["./widget-list.component.css"]
})
export class WidgetListComponent implements OnInit {
  moduleId = null;
  courseId = null;
  lessonId = null;
  topicId = null;
  widgets = [];
  selectedWidget = { id: "" };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: WidgetService
  ) {
    this.route.params.subscribe(params => {
      this.setParams(params);
    });
  }

  selectWidget = widget => {
    this.selectedWidget = widget;
  };

  setParams(params) {
    this.courseId = params["courseId"];
    this.moduleId = params["moduleId"];
    this.lessonId = params["lessonId"];
    this.topicId = params["topicId"];
    if (
      this.courseId != null &&
      this.moduleId != null &&
      this.lessonId != null &&
      this.topicId != null
    )
      this.loadWidgets(this.topicId);
  }

  loadWidgets(topicId) {
    this.service.findWidgetsForTopic(topicId).then(widgets => {
      this.widgets = widgets;
      console.log(widgets);
    });
  }

  ngOnInit() {}
}
