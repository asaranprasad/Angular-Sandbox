import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TopicService {
  API_URL = "https://young-shore-20354.herokuapp.com/";
  // API_URL = "http://localhost:8080/";

  constructor() {}

  findAllTopics() {
    return fetch(this.API_URL + "api/topics").then(response => response.json());
  }
  findTopicsForLesson(lessonId) {
    return fetch(this.API_URL + "api/lesson/" + lessonId + "/topics").then(
      response => response.json()
    );
  }
  findTopicById(topicId) {
    return fetch(this.API_URL + "api/topic" + topicId).then(response =>
      response.json()
    );
  }
}
