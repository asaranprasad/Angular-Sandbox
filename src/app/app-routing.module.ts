import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseComponent } from "./components/course/course.component";
import { CourseGridComponent } from "./components/course-grid/course-grid.component";
import { ModuleListComponent } from "./components/module-list/module-list.component";
import { LessonTabsComponent } from "./components/lesson-tabs/lesson-tabs.component";
import { WidgetListComponent } from "./components/widget-list/widget-list.component";

const routes: Routes = [
  { path: "", redirectTo: "course", pathMatch: "full" },
  {
    path: "course",
    component: CourseGridComponent,
    children: [
      {
        path: ":courseId",
        component: CourseComponent,
        children: [
          {
            path: "module",
            component: ModuleListComponent,
            children: [
              {
                path: ":moduleId/lesson",
                component: LessonTabsComponent,
                children: [
                  {
                    path: ":lessonId/widget",
                    component: WidgetListComponent
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
