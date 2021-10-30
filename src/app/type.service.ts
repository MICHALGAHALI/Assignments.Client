import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data'
import { TypeTask } from './type-task.medel';
@Injectable({
  providedIn: 'root'
})
export class TypeService  extends EntityCollectionServiceBase<TypeTask>{

  constructor(collectionFactory:EntityCollectionServiceElementsFactory) {
    super('type',collectionFactory);    
  }
}