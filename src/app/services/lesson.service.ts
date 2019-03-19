import { Injectable } from "@angular/core";

const API_URL = "https://young-shore-20354.herokuapp.com/";

@Injectable({
  providedIn: "root"
})
export class LessonService {
  constructor() {}

  LESSON_URL = API_URL + "api/course/COURSE_ID/module/MODULE_ID/lessons";

  findAllLessons() {}
  findLessonsForModule(moduleId) {}
  findLessonById(lessonId) {}
}
