import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListPageComponent } from './task-list-page/task-list-page.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import {CheckboxModule} from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { TaskComponent } from './task/task.component';
import {InputTextModule} from 'primeng/inputtext';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown'
import { HttpCallInterceptor } from './http-call.interceptor';
import { RangeDateComponent } from './shared/controls/range-date.component';
import { dateGroupDirective } from './shared/controls/date-group/date-group.Directive';
@NgModule({
  declarations: [
    AppComponent,
    TaskListPageComponent,
    TaskComponent,
    RangeDateComponent,
    dateGroupDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(),
    EntityDataModule.forRoot({
      entityMetadata: {
        'todo': {},
        'type':{}
      },
      //pluralNames:{'Task':'TODO'}
    }),
    TableModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    CascadeSelectModule,
    CalendarModule,
    DropdownModule
  ],
  providers: [//https://jsonplaceholder.typicode.com/
    {provide:DefaultDataServiceConfig,useValue:{root:'http://localhost:5000/api/'}},
    {provide:HTTP_INTERCEPTORS,multi:true,useClass:HttpCallInterceptor}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
