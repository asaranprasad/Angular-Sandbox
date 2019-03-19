import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LessonService {
  API_URL = "https://young-shore-20354.herokuapp.com/";

  constructor() {}

  findAllLessons() {
    return fetch(this.API_URL + "api/lessons").then(response =>
      response.json()
    );
  }

  findLessonsForModule(moduleId) {
    return fetch(this.API_URL + "api/module/" + moduleId + "/lessons").then(
      response => response.json()
    );
  }

  findLessonById(lessonId) {
    return fetch(this.API_URL + "api/lesson" + lessonId).then(response =>
      response.json()
    );
  }
}
