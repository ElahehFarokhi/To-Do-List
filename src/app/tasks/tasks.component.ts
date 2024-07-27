import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './dummy-tasks';
import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) username?: string;
  @Input({ required: true }) userId?: string;

  tasks: Task[] = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((p) => p.userId === this.userId);
  }

  onAddTask() {}

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((p) => p.id != id);
  }
}
