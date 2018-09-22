import { Component, OnInit, OnChanges } from '@angular/core';
import { Task } from '../task-model';
import { Router } from '@angular/router';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {


  itemList: Task[] = [];

  constructor(private router: Router,
    private taskService: TaskService) { }

  ngOnInit() {
    this.itemList = this.taskService.getTasks();
  }

  newTask() {
    this.router.navigate(['new-task']);
  }


}
