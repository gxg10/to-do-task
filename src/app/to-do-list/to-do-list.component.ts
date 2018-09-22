import { Component, OnInit, DoCheck } from '@angular/core';
import { Task } from '../task-model';
import { Router } from '@angular/router';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit, DoCheck {

  itemList: Task[] = [];
  today: Date;

  constructor(private router: Router,
    private taskService: TaskService) { }

  ngOnInit() {
    this.itemList = this.taskService.getTasks();
    this.sort();
  }

  ngDoCheck() {
    this.itemList = this.taskService.getTasks();
    this.today = this.taskService.getTodayTime();
    this.sort();
  }

  sort() {
   this.taskService.sortTasks();
  }

  newTask() {
    this.router.navigate(['new-task']);
  }

  overd() {
    this.taskService.checkIfOverdue();
  }

}
