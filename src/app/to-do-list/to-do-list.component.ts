import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { Task } from '../task-model';
import { Router } from '@angular/router';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit, DoCheck, OnChanges {

  itemList: Task[] = [];
  today: Date;

  constructor(private router: Router,
    private taskService: TaskService) { }

  ngOnInit() {
    this.itemList = this.taskService.getTasks();
    this.taskService.sortTasks();
    this.taskService.checkIfOverdue();
  }

  ngOnChanges() {
    // this.taskService.checkIfOverdue();
  }

  ngDoCheck() {
    this.itemList = this.taskService.getTasks();
    this.today = this.taskService.getTodayTime();
    this.taskService.sortTasks();
    this.taskService.checkIfOverdue();
  }

  newTask() {
    this.router.navigate(['new-task']);
  }

  saveServer() {
    this.taskService.storeOnServer().subscribe(
      response => {
        console.log(response);
      }
    );
  }

  getFromServer() {
    this.taskService.fetchFromServer().subscribe(
      (tasks: Task[]) => {
        this.taskService.setTasts(tasks);
      }
    );
  }

  test() {
    this.taskService.checkIfOverdue();
  }

}
