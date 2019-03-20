import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LessonService {
  API_URL = "https://young-shore-20354.herokuapp.com/";
  // API_URL = "http://localhost:8080/";

  constructor() {}

  findAllLessons() {
    return fetch(this.API_URL + "api/lessons").then(response =>
      response.json()
    );
  }

  findLessonsForModule(courseId, moduleId) {
    return fetch(
      this.API_URL +
        "api/course/" +
        courseId +
        "/module/" +
        moduleId +
        "/lessons"
    ).then(response => response.json());
  }

  findLessonById(lessonId) {
    return fetch(this.API_URL + "api/lesson" + lessonId).then(response =>
      response.json()
    );
  }
}
