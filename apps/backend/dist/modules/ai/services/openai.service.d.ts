import { ConfigService } from '@nestjs/config';
export declare class OpenAiService {
    private configService;
    private readonly logger;
    private openai;
    private aiProvider;
    private assistantName;
    private aiModel;
    private streamEnabled;
    private maxTokens;
    private temperature;
    constructor(configService: ConfigService);
    chat(message: string, context?: string, conversationHistory?: any[]): Promise<any>;
    summarize(text: string): Promise<any>;
    extractKeyTerms(text: string): Promise<any>;
    assessRisk(content: string, type: 'contract' | 'matter' | 'general'): Promise<any>;
    analyzeContract(contractText: string, contractType?: string): Promise<any>;
    generateDocument(documentType: string, parameters: any): Promise<any>;
    generateInsights(data: any, type: 'dashboard' | 'matter' | 'contract'): Promise<any>;
    private getOpenAIResponse;
    private getEnhancedMockResponse;
    private getMockSummary;
    private getMockKeyTerms;
    private getMockRiskAssessment;
    private getMockInsights;
    private getMockContractAnalysis;
    private getMockDocumentGeneration;
}
