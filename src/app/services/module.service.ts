import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ModuleService {
  API_URL = "https://young-shore-20354.herokuapp.com/";
  // API_URL = "http://localhost:8080/";

  constructor() {}

  findAllModules() {
    return fetch(this.API_URL + "api/modules").then(response =>
      response.json()
    );
  }

  findModulesForCourse(courseId) {
    return fetch(this.API_URL + "api/course/" + courseId + "/modules").then(
      response => response.json()
    );
  }

  findModuleById(moduleId) {
    return fetch(this.API_URL + "api/module" + moduleId).then(response =>
      response.json()
    );
  }
}
