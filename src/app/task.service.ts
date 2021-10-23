import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data'
import { Task } from './task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService  extends EntityCollectionServiceBase<Task>{

  constructor(collectionFactory:EntityCollectionServiceElementsFactory) {
    super('todo',collectionFactory);
    
    //super('product',collectionFactory);
  }
}