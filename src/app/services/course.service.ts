import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  API_URL = "https://young-shore-20354.herokuapp.com/";

  constructor() {}

  COURSE_URL = this.API_URL + "api/courses";

  findAllCourses() {
    return fetch(this.COURSE_URL).then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch(this.COURSE_URL + "/" + courseId).then(response =>
      response.json()
    );
  }
}
