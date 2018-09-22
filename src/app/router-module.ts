import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTaskComponent } from './to-do-list/new-task/new-task.component';
import { TaskDetailComponent } from './to-do-list/task-detail/task-detail.component';

const appRoutes: Routes = [
    {path: 'new-task', component: NewTaskComponent},
    {path: ':id', component: TaskDetailComponent},
    {path: ':id/new-task', component: NewTaskComponent}

];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}