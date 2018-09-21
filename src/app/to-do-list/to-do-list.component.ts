import { Component, OnInit } from '@angular/core';
import { Task } from '../task-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  itemList: Task[] = [
    new Task('Sa iei paine', 'paine graham feliata',
    new Date('December 4, 2018 20:30:00'), 'new'),
    new Task('Aspirator', 'curatenie de paste',
    new Date('September 22, 2018 21:20:00'), 'new')
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newTask() {
    this.router.navigate(['new-task']);
  }

}
