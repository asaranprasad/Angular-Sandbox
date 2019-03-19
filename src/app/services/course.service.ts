import { Injectable } from "@angular/core";

const API_URL = "https://young-shore-20354.herokuapp.com/";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  constructor() {}

  COURSE_URL = API_URL + "api/courses";

  findAllCourses() {
    return fetch(this.COURSE_URL).then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch(this.COURSE_URL + "/" + courseId).then(response =>
      response.json()
    );
  }
}
