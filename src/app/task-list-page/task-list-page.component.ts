import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import{ Task} from '../task.model'
import { TaskService } from '../task.service';
import { TypeTask } from '../type-task.medel';
import { TypeService } from '../type.service';
@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListPageComponent implements OnInit {
  typeTask$: Observable<TypeTask[]>=this._typeService.entities$;
  tasks$: Observable<any[]>=this._taskService.entities$;
  constructor(private _taskService:TaskService,
    private _typeService:TypeService,   ) {
  }

  ngOnInit(): void {
    this._taskService.getAll();
    this._typeService.getAll();
  }
  deleteTask(taskId:number)
  {
    this._taskService.delete(taskId)
  }
  changeCompletedTask(event:any,task:Task) {
    var clone = Object.assign({}, task);
    clone.completed=!clone.completed;
    this._taskService.update(clone);   
  }
  changeTypeTask(event:any,task:Task){
    var clone = Object.assign({}, task);
    clone.type=event.value;
    this._taskService.update(clone);
  }
}
