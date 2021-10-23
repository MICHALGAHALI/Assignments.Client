import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListPageComponent } from './task-list-page/task-list-page.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button'
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import {CheckboxModule} from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TaskListPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(),
    EntityDataModule.forRoot({
      entityMetadata: {
        'todo': {}
      },
      //pluralNames:{'Task':'TODO'}
    }),
    TableModule,
    ButtonModule,
    CheckboxModule
  ],
  providers: [
    {provide:DefaultDataServiceConfig,useValue:{root:'https://jsonplaceholder.typicode.com/'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
