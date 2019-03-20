import { Component, OnInit, Input } from "@angular/core";
import { ModuleService } from "src/app/services/module.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-module-list",
  templateUrl: "./module-list.component.html",
  styleUrls: ["./module-list.component.css"]
})
export class ModuleListComponent implements OnInit {
  courseId;
  modules = [];
  selectedModule = { id: "" };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ModuleService
  ) {}

  selectModule = module => {
    this.selectedModule = module;
  };

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get("courseId");
    this.service.findModulesForCourse(this.courseId).then(modules => {
      this.modules = modules;
      console.log(modules);
      console.log("courseId: " + this.courseId);
    });
  }
}
