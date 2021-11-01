import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { TypeService } from '../type.service';
import { Observable, of } from 'rxjs';
import { TypeTask } from '../type-task.medel';
import { catchError, map, startWith } from 'rxjs/operators';
import { MappedData } from '../shared/class/MappedData';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit {
  resultServer$: Observable<MappedData<String>> = of();
  taskForm = this._formBuilder.group({
    Title: new FormControl('', [Validators.required]),
    Completed: new FormControl(),
    Type: new FormControl('', [Validators.required]),
    Description: new FormControl(''),
    RangeDates:
      [{
        StartDate: '',
        FinishDate: '',
      }],
    IsRepeated: new FormControl()
  });

  typeTask$: Observable<TypeTask[]> = this._typeService.entities$;
  constructor(
    private _formBuilder: FormBuilder,
    private _typeService: TypeService,
    private _taskService: TaskService,
    
  ) { }
  ngOnInit(): void {
    this._typeService.getAll();
  }
  addTask() {

    this.resultServer$ = this._taskService.add(this.taskForm.value)
      .pipe(
        map((event) => {
          setTimeout(() => {
            window.location.href = '/';            
          }, 2000);
          return {
            messege: "הנתונים עודכנו בהצלחה",
            statusRequest: 'SucceedRequest'
          }
        }
        ),
        catchError(error => {
          console.log(error);
          return of(
            {
              messege: "השליחה נכשלה,נסה שוב מאוחר יותר",
              statusRequest: 'FailRequest'
            });
        }),
        startWith({
          messege: "",
          statusRequest: 'InRequest'
        }),
      );
  }
}