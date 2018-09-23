export class Task {

   public name: string;
   public small_description: string;
   public due_date: Date;
   public status: string;
   constructor(name: string, small_description: string, due_date: Date) {
        this.name = name;
        this.small_description = small_description;
        this.due_date = due_date;
        this.status = 'new';
    }

}