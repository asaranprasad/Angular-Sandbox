import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  API_URL = "https://young-shore-20354.herokuapp.com/";
  // API_URL = "http://localhost:8080/";

  constructor() {}

  COURSE_URL = this.API_URL + "api/courses";

  findAllCourses() {
    return fetch(this.API_URL + "api/courses").then(response =>
      response.json()
    );
  }

  findCourseById(courseId) {
    return fetch(this.API_URL + "api/course/" + courseId).then(response =>
      response.json()
    );
  }
}
