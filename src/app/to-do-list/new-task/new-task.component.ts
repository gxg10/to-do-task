import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../task-model';
import { TaskService } from '../../task-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService,
    private router: Router) { }

  ngOnInit() {
  }

  addTask(form: NgForm) {
    const name = form.value.name;
    const description = form.value.description;
    const duedate = form.value.duedate;
    const n =  new Task(name, description, duedate);
    console.log(n);
    this.taskService.addTask(n);
    this.router.navigate(['/']);
  }

}
