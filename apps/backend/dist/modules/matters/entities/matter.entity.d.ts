import { User } from '../../users/entities/user.entity';
export declare class Matter {
    id: string;
    title: string;
    description: string;
    clientName: string;
    clientId: string;
    type: string;
    status: string;
    priority: string;
    estimatedValue: number;
    billableHours: number;
    hourlyRate: number;
    dueDate: Date;
    tags: string;
    customFields: string;
    assignedLawyer: User;
    assignedLawyerId: string;
    createdAt: Date;
    updatedAt: Date;
    closedAt: Date;
}
