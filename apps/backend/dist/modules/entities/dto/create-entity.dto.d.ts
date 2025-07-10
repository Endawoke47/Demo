export declare class CreateEntityDto {
    name: string;
    type: string;
    jurisdiction: string;
    status: string;
    description?: string;
    details?: Record<string, any>;
    incorporationDate?: string;
    dissolutionDate?: string;
    registrationNumber?: string;
    taxId?: string;
    officers?: Record<string, any>[];
    filings?: Record<string, any>[];
    compliance?: Record<string, any>;
}
