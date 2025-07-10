import { ConfigService } from '@nestjs/config';
import { OpenAiService } from './openai.service';
import { DeepSeekService } from './deepseek.service';
export type AIProvider = 'openai' | 'deepseek' | 'mock';
export declare class AIProviderService {
    private configService;
    private openAiService;
    private deepSeekService;
    private readonly logger;
    private currentProvider;
    constructor(configService: ConfigService, openAiService: OpenAiService, deepSeekService: DeepSeekService);
    chat(message: string, context?: string, conversationHistory?: any[]): Promise<any>;
    summarize(text: string): Promise<any>;
    extractKeyTerms(text: string): Promise<any>;
    assessRisk(content: string, type: 'contract' | 'matter' | 'general'): Promise<any>;
    analyzeContract(contractText: string, contractType?: string): Promise<any>;
    generateDocument(documentType: string, parameters: any): Promise<any>;
    generateInsights(data: any, type: 'dashboard' | 'matter' | 'contract'): Promise<any>;
    getCurrentProvider(): AIProvider;
    switchProvider(provider: AIProvider): Promise<void>;
    getProviderStatus(): Promise<any>;
}
