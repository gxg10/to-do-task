import { Task } from './task-model';


export class TaskService {

    var_done = 'done';

    private tasks: Task[] = [
        new Task('Sa iei paine', 'paine graham feliata',
        new Date('December 4, 2018 20:30:00')),
        new Task('Aspirator', 'curatenie de paste',
        new Date('September 22, 2018 21:20:00')),
        new Task('Spalat Masina', 'curatenie de masina',
        new Date('September 22, 2019 21:20:00'))

      ];

    getTasks() {
        return this.tasks;
    }

    getOneTask(index: number) {
        return this.tasks[index];
    }

    addTask(task: Task) {
        this.tasks.push(task);
        console.log(this.tasks);
    }

    updateTask(index: number, newTask: Task) {
        this.tasks[index] = newTask;
    }

    deleteTask(index: number) {
        this.tasks.splice(index, 1);
    }

    doneTask(index: number) {
        const tempTask = this.tasks[index];
        tempTask.status = 'done';
    }

    getStatus(index: number) {
        const tempTask = this.tasks[index];

        return tempTask.status;
    }

}

