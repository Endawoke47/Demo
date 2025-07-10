export declare class CreateContractDto {
    title: string;
    description?: string;
    type: string;
    status?: string;
    priority?: string;
    value?: number;
    effectiveDate?: string;
    expirationDate?: string;
    renewalDate?: string;
    autoRenewal?: boolean;
    renewalNoticeDays?: number;
    terms?: string;
    parties?: any[];
    keyTerms?: any;
    riskAssessment?: any;
    tags?: string[];
    documentPath?: string;
    assignedLawyerId?: string;
    matterId?: string;
}
