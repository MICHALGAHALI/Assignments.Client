import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import{ Task} from '../task.model'
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListPageComponent implements OnInit {
  task$: Observable<Task[]>=this._taskService.entities$;
  constructor(private _taskService:TaskService) {
  }

  ngOnInit(): void {
    this._taskService.getAll();
  }
  deleteTask(taskId:number)
  {
    this._taskService.delete(taskId)
  }
  changeTask(evt:any,task:Task) {
    var clone = Object.assign({}, task);
    clone.completed=!clone.completed
    this._taskService.update(clone);   
  }

}
