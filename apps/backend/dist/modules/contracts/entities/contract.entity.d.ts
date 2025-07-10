import { User } from '../../users/entities/user.entity';
import { Matter } from '../../matters/entities/matter.entity';
export declare class Contract {
    id: string;
    title: string;
    description: string;
    type: string;
    status: string;
    priority: string;
    value: number;
    effectiveDate: Date;
    expirationDate: Date;
    renewalDate: Date;
    autoRenewal: boolean;
    renewalNoticeDays: number;
    terms: string;
    parties: string;
    keyTerms: string;
    riskAssessment: string;
    tags: string;
    documentPath: string;
    assignedLawyer: User;
    assignedLawyerId: string;
    matter: Matter;
    matterId: string;
    createdAt: Date;
    updatedAt: Date;
}
