import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import {Task} from '../task.model'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
 
  taskForm = this._formBuilder.group({
    title:['', [Validators.required], []],
    completed:['', []],
    type:['', [Validators.required], []],
    description:['', [Validators.required], []],
    beginDate:['', [Validators.required], []],
    endDate:['', [Validators.required], []],
    isRepeated:['', [Validators.required], []]    
  }); 
  countries:any[]=[];
  constructor(private _formBuilder: FormBuilder,private _taskService:TaskService) { }
  ngOnInit(): void {
    this.countries = [
      {name: 'India', code: 'IND'},
      {name: 'United States of America', code: 'USA'},
      {name: 'United Kingdom', code: 'UK'},
    ];
  }
  addTask(){
    console.log();
    this._taskService.add( this.taskForm.value);
  }
}