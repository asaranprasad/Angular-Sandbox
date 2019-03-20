import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseComponent } from "./components/course/course.component";
import { CourseGridComponent } from "./components/course-grid/course-grid.component";
import { ModuleListComponent } from "./components/module-list/module-list.component";
import { LessonTabsComponent } from "./components/lesson-tabs/lesson-tabs.component";
import { WidgetListComponent } from "./components/widget-list/widget-list.component";
import { TopicPillsComponent } from "./components/topic-pills/topic-pills.component";

const routes: Routes = [
  { path: "", redirectTo: "/course", pathMatch: "full" },
  {
    path: "course",
    component: CourseGridComponent
  },
  {
    path: "course/:courseId",
    component: CourseComponent
  },
  {
    path: "course/:courseId/module",
    component: CourseComponent
  },
  {
    path: "course/:courseId/module/:moduleId/lesson",
    component: CourseComponent
  },

  {
    path: "course/:courseId/module/:moduleId/lesson/:lessonId/topic",
    component: CourseComponent
  },

  {
    path: "course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget",
    component: CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
