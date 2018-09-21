import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../task-model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTask(form: NgForm) {
    const name = form.value.name;
    const description = form.value.description;
    const duedate = form.value.description;
    const status = 'text';
    const n =  new Task(name, description, duedate, status);
    console.log(n);
  }

}
