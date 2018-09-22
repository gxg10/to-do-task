import { Component, OnInit } from '@angular/core';
import { Task } from '../../task-model';
import { TaskService } from '../../task-service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task;
  id: number;

  constructor(private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id =  +params['id'];
        this.task = this.taskService.getOneTask(this.id);
      }
    )
  }

  editTask(index: number) {
    this.router.navigate(['new-task'], {relativeTo: this.route});
    // console
    
  }

  deleteTask(index: number) {
      this.taskService.deleteTask(index);
      this.router.navigate(['/']);
  }

}
