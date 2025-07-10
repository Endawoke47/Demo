export interface EntityData {
    id: string;
    name: string;
    type: string;
    jurisdiction: string;
    status: string;
    description?: string;
    details?: Record<string, any>;
    incorporationDate?: Date;
    dissolutionDate?: Date;
    registrationNumber?: string;
    taxId?: string;
    officers?: Record<string, any>[];
    filings?: Record<string, any>[];
    compliance?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare class Entity {
    id: string;
    name: string;
    type: string;
    jurisdiction: string;
    status: string;
    description: string;
    details: string;
    incorporationDate: Date;
    dissolutionDate: Date;
    registrationNumber: string;
    taxId: string;
    officers: string;
    filings: string;
    compliance: string;
    createdAt: Date;
    updatedAt: Date;
}
