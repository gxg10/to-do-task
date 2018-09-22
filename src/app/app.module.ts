import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-list/to-do-item/to-do-item.component';
import { AppRoutingModule } from './router-module';
import { NewTaskComponent } from './to-do-list/new-task/new-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from './task-service';
import { TaskDetailComponent } from './to-do-list/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent,
    NewTaskComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
