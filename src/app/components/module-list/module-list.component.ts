import { Component, OnInit, Input } from "@angular/core";
import { ModuleService } from "src/app/services/module.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-module-list",
  templateUrl: "./module-list.component.html",
  styleUrls: ["./module-list.component.css"]
})
export class ModuleListComponent implements OnInit {
  @Input() courseId;
  modules = [];
  selectedModule = {};
  constructor(private route: ActivatedRoute, private service: ModuleService) {}

  selectModule = module => {
    this.selectedModule = module;
  };

  ngOnInit() {
    this.service
      .findModulesForCourse(this.route.snapshot.paramMap.get("courseId"))
      .then(modules => {
        this.modules = modules;
        console.log(modules);
      });
  }
}
