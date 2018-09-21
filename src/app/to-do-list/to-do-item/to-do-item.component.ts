import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task-model';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() it: Task;
  constructor() { }

  ngOnInit() {
  }

}
