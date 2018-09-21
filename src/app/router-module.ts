import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTaskComponent } from './to-do-list/new-task/new-task.component';

const appRoutes: Routes = [
    {path: 'new-task', component: NewTaskComponent}

];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}