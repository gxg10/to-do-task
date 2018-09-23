import { Task } from './task-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

    // today: Date = new Date(Date.now());
    today: Date;

    constructor(private http: HttpClient) {
        setInterval(() => {
            this.today =  new Date(Date.now());
        }, 5000);
    }

    private tasks: Task[] = [];

    // private tasks: Task[] = [

    //     new Task('Sa iei paine', 'paine graham feliata',
    //     new Date('01.01.2018 20:30:11')),
    //     new Task('Aspirator', 'curatenie de paste',
    //     new Date('September 22, 2018, 21:20:00')),
    //     new Task('Spalat Masina', 'curatenie de masina',
    //     new Date('September 22, 2019, 21:20:00'))

    //   ];

    storeOnServer() {
        return this.http.put('https://to-do-list-b4785.firebaseio.com/tasks.json',
        this.getTasks());
    }

    fetchFromServer() {
        return this.http.get('https://to-do-list-b4785.firebaseio.com/tasks.json');
    }

    getTasks() {
        return this.tasks;
    }

    sortTasks() {

        if (this.tasks.length !== 0) {
            const sortedTasks = this.tasks.sort((a, b) =>
            new Date(a.due_date).getTime()
            - new Date(b.due_date).getTime());
            return sortedTasks;
        }

       }

    setTasts(tasks: Task[]) {
        console.log('am setat taskurile');
        this.tasks = tasks;
    }

    getOneTask(index: number) {
        return this.tasks[index];
    }

    addTask(task: Task) {
        this.tasks.push(task);
        console.log(task);
    }

    updateTask(index: number, newTask: Task) {
        this.tasks[index] = newTask;
    }

    deleteTask(index: number) {
        this.tasks.splice(index, 1);
    }

    setDoneTask(index: number) {
        const tempTask = this.tasks[index];
        tempTask.status = 'done';
    }

    setOverdueTask(index: number) {
        // const tempTask = this.tasks[index];
        this.tasks[index].status = 'overdue';
        console.log(this.tasks[index].status);
    }

    getStatus(index: number) {
        const tempTask = this.tasks[index];

        return tempTask.status;
    }

    getTodayTime() {
        return this.today;
    }

    checkIfOverdue() {
        console.log('verificam');

        for (let i = 0; i < this.tasks.length; i++) {
            console.log('1' + this.today);
            console.log('2' + this.tasks[i].due_date);
            if (this.tasks[i].due_date.getTime() < this.today.getTime()) {
                console.log('patata');
                this.setOverdueTask(i);
            }
        }
    }

}

