export declare class CreateMatterDto {
    title: string;
    description?: string;
    clientName: string;
    clientId?: string;
    type: string;
    status?: string;
    priority?: string;
    estimatedValue?: number;
    billableHours?: number;
    hourlyRate?: number;
    dueDate?: string;
    tags?: string[];
    customFields?: any;
    assignedLawyerId?: string;
}
