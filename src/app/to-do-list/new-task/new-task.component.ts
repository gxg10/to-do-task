import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../../task-model';
import { TaskService } from '../../task-service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @Input() index: number;
  editMode = false;
  taskForm: FormGroup;
  id: number;

  constructor(private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initTask();
      }
    );
  }

  onSubmit() {

    if (this.editMode) {

      const name = this.taskForm.value.name;
      const small_desc = this.taskForm.value.small_description;
      const duedate = this.taskForm.value.duedate;

      const newTask = new Task(name, small_desc, new Date(duedate));

      this.taskService.updateTask(this.id, newTask);
      this.router.navigate(['..']);
    } else {

      const name = this.taskForm.value.name;
      const small_desc = this.taskForm.value.small_description;
      const duedate = this.taskForm.value.duedate;

      const newTask = new Task(name, small_desc, new Date(duedate));
      this.taskService.addTask(newTask);
      this.taskForm.reset();
      this.router.navigate(['..']);
    }

  }

  private initTask() {

    let taskName = '';
    let small_description = '';
    // let duedate = new Date();
    // let duedate = new Date('').setTime(0);
    let duedate = '';

    if (this.editMode) {
     const task = this.taskService.getOneTask(this.id);
     taskName = task.name;
     small_description = task.small_description;
     console.log('due date '+ this.datepipe.transform(task.due_date, 'yyyy.mm.dd hh:mm:ss'));
    //  duedate = task.due_date.toString
     duedate = this.datepipe.transform(new Date(task.due_date), 'yyyy-mm-dd hh:mm:ss');
    }

    this.taskForm = new FormGroup({
      'name' : new FormControl(taskName, Validators.required),
      'small_description': new FormControl(small_description,
        [Validators.required, Validators.maxLength(20)]),
      'duedate' : new FormControl(duedate,
        [Validators.required, Validators.pattern(/^[A-Za-z0-9 _.,:!"'/$]*$/)])
        // [Validators.required])
    });
  }

}
