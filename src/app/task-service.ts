import { Task } from './task-model';


export class TaskService {

    today: Date = new Date(Date.now());

    private tasks: Task[] = [

        new Task('Sa iei paine', 'paine graham feliata',
        new Date('December 4, 2008, 20:30:00')),
        new Task('Aspirator', 'curatenie de paste',
        new Date('September 22, 2018, 21:20:00')),
        new Task('Spalat Masina', 'curatenie de masina',
        new Date('September 22, 2019, 21:20:00'))

      ];

    sortTasks() {
     const t = this.tasks.sort((a, b) =>
        new Date(a.due_date).getTime()
        - new Date(b.due_date).getTime());
        return t;
    }

    getTasks() {
        return this.tasks;
    }

    getOneTask(index: number) {
        return this.tasks[index];
    }

    addTask(task: Task) {
        this.tasks.push(task);
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

    overdueTask(index: number) {
        const tempTask = this.tasks[index];
        tempTask.status = 'overdue';
    }

    getStatus(index: number) {
        const tempTask = this.tasks[index];

        return tempTask.status;
    }

    getTodayTime() {
        return this.today;
    }

    // checkIfOverdue() {
    //     this.tasks.forEach( (task) => {
    //         if (task.due_date < this.today) {
    //             this.overdueTask(task);
    //         }
    //     })
    // }

    checkIfOverdue() {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].due_date < this.today) {
                this.overdueTask(i);
                console.log(this.tasks[i]);
            }
            
        }
    }

}

