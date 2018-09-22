import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task-model';
import { TaskService } from '../../task-service';
import { Router, ActivatedRoute } from '@angular/router';

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

  readTask() {
  }

  editTask(index: number) {
    this.router.navigate(['new-task']);
    // console

  }

  deleteTask(index: number) {
      this.taskService.deleteTask(index);
  }

  getStatusTask(index: number) {
    const st = this.taskService.getStatus(index);
    return st;
  }

  calculate() {
    if (this.getStatusTask(this.index) === 'neww') {
      return {
        btn: true,
        'btn-primary': true
      };
    }
  }

  getStatusTaskColor(status) {
    switch (status) {
      case 'new':
      return 'orange';
      case 'done':
      return 'black';
    }
  }

}
