import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CourseGridComponent } from './components/course-grid/course-grid.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './components/topic-pills/topic-pills.component';
import { WidgetListComponent } from './components/widget-list/widget-list.component';

@NgModule({
  declarations: [AppComponent, CourseGridComponent, ModuleListComponent, LessonTabsComponent, TopicPillsComponent, WidgetListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
