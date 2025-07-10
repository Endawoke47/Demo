import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: any): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTaskDto: any): string;
    remove(id: string): string;
}
