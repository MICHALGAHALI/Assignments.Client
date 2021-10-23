import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import{ Task} from '../task.model'
@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListPageComponent implements OnInit {
  tasks: Task[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
