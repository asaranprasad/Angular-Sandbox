import { Injectable } from "@angular/core";
const API_URL = "https://young-shore-20354.herokuapp.com/";

@Injectable({
  providedIn: "root"
})
export class TopicService {
  constructor() {}

  findAllTopics() {}
  findTopicsForLesson(lessonId) {}
  findTopicById(topicId) {}
}
