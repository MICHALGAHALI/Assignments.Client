import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListPageComponent } from './task-list-page/task-list-page.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'',component:TaskListPageComponent},
  {path:'newTask',component:TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
