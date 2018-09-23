import { Task } from './task-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

    today: Date;

    constructor(private http: HttpClient) {
        setInterval(() => {
            this.today =  new Date(Date.now());
        }, 5000);
    }

    private tasks: Task[] = [];

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

    setTasks(tasks: Task[]) {
        this.tasks = tasks;
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

    setDoneTask(index: number) {
        const tempTask = this.tasks[index];
        tempTask.status = 'done';
    }

    setOverdueTask(index: number) {
        this.tasks[index].status = 'overdue';
    }

    getTodayTime() {
        return this.today;
    }

    checkIfOverdue() {
        for (let i = 0; i < this.tasks.length; i++) {
            if (new Date(this.tasks[i].due_date).getTime() < new Date(this.today).getTime()) {
                this.setOverdueTask(i);
            }
        }
    }

}

