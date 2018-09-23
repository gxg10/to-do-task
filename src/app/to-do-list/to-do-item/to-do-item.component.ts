import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Task } from '../../task-model';
import { TaskService } from '../../task-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() it: Task;
  @Input() index: number;

  constructor(private taskService: TaskService,
    private router: Router) { }

  ngOnInit() {

  }

  editTask() {
    this.router.navigate(['new-task']);
  }

  deleteTask(index: number) {
      this.taskService.deleteTask(index);
  }

  getStatusTask(index: number) {
    const st = this.taskService.getStatus(index);
    return st;
  }

  getStatusTaskColor(status) {
    switch (status) {
      case 'new':
      return 'white';
      case 'done':
      return 'red';
      case 'overdue':
      return 'green';
    }
  }

}
