import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import {Task} from '../task.model'
import { TypeService } from '../type.service';
import { Observable } from 'rxjs';
import { TypeTask } from '../type-task.medel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit {
 
  taskForm = this._formBuilder.group({
    Title:new FormControl('',[Validators.required]),
    Completed:new FormControl(),
    Type:new FormControl('',[Validators.required]),
    Description:new FormControl('',[Validators.required]),
    StartDate:new FormControl('',[Validators.required]),
    FinishDate:new FormControl(''),
    IsRepeated:new FormControl()
  }); 
  typeTask$: Observable<TypeTask[]>=this._typeService.entities$;
  constructor(
    private _formBuilder: FormBuilder,
    private _typeService:TypeService,    
    private _taskService:TaskService
    ) { }
  ngOnInit(): void {
    this._typeService.getAll();
  }
  addTask(){
    this._taskService.add( this.taskForm.value);
  }
}