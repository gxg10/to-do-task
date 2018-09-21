import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task-model';
import { TaskService } from '../../task-service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() it: Task;
  @Input() index: number;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  deleteTask(index: number) {
      this.taskService.deleteTask(index);
  }

}
