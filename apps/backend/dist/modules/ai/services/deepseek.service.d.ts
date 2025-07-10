import { ConfigService } from '@nestjs/config';
export declare class DeepSeekService {
    private configService;
    private readonly logger;
    private apiKey;
    private baseUrl;
    private model;
    constructor(configService: ConfigService);
    chat(message: string, context?: string, conversationHistory?: any[]): Promise<any>;
    summarize(text: string): Promise<any>;
    extractKeyTerms(text: string): Promise<any>;
    assessRisk(content: string, type: 'contract' | 'matter' | 'general'): Promise<any>;
    analyzeContract(contractText: string, contractType?: string): Promise<any>;
    generateDocument(documentType: string, parameters: any): Promise<any>;
}
