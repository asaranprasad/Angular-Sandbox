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
    this.router.navigate([
      "/",
      "course",
      this.courseId,
      "module",
      module.id,
      "lesson"
    ]);
  };

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get("courseId");
    const moduleIdPathVar = this.route.snapshot.paramMap.get("moduleId");
    this.service.findModulesForCourse(this.courseId).then(modules => {
      this.modules = modules;
      /* Color based on URL */
      if (moduleIdPathVar != null) {
        this.modules.forEach(mod => {
          if (mod.id == moduleIdPathVar) {
            this.selectedModule = mod;
            console.log("selected Module: " + mod.title);
          }
        });
      }
      console.log(modules);
      console.log("courseId: " + this.courseId);
    });
  }
}
