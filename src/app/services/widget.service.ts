import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WidgetService {
  // API_URL = "https://young-shore-20354.herokuapp.com/";
  API_URL = "http://localhost:8080/";

  constructor() {}

  findAllWidgets() {
    return fetch(this.API_URL + "api/widgets").then(response =>
      response.json()
    );
  }

  findWidgetsForTopic(topicId) {
    return fetch(this.API_URL + "api/topic/" + topicId + "/widgets").then(
      response => response.json()
    );
  }

  findWidgetById(widgetId) {
    return fetch(this.API_URL + "api/widget" + widgetId).then(response =>
      response.json()
    );
  }
}
