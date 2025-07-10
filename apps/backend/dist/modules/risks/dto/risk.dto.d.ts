export declare class CreateRiskDto {
    title: string;
    description: string;
    category: string;
    likelihood: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';
    status: 'open' | 'mitigated' | 'closed';
    owner: string;
    tags?: string[];
    documentUrl?: string;
    relatedMatters?: string[];
    createdBy: string;
}
export declare class UpdateRiskDto {
    title?: string;
    description?: string;
    category?: string;
    likelihood?: 'low' | 'medium' | 'high';
    impact?: 'low' | 'medium' | 'high';
    status?: 'open' | 'mitigated' | 'closed';
    owner?: string;
    tags?: string[];
    documentUrl?: string;
    relatedMatters?: string[];
}
