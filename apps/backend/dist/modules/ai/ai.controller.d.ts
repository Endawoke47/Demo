import { AiService } from './ai.service';
import { ChatMessageDto } from './dto/chat-message.dto';
import { LegalResearchDto } from './dto/legal-research.dto';
import { ContractAnalysisDto } from './dto/contract-analysis.dto';
import { DocumentGenerationDto } from './dto/document-generation.dto';
export declare class AiController {
    private readonly aiService;
    constructor(aiService: AiService);
    chat(chatMessageDto: ChatMessageDto): Promise<{
        message: any;
        assistantName: any;
        provider: any;
        model: any;
        timestamp: any;
        usage: any;
    }>;
    legalResearch(legalResearchDto: LegalResearchDto): Promise<any>;
    analyzeContract(contractAnalysisDto: ContractAnalysisDto): Promise<any>;
    generateDocument(documentGenerationDto: DocumentGenerationDto): Promise<any>;
    summarizeText({ text }: {
        text: string;
    }): Promise<any>;
    extractKeyTerms({ text }: {
        text: string;
    }): Promise<any>;
    assessRisk({ content, type }: {
        content: string;
        type: 'contract' | 'matter' | 'general';
    }): Promise<any>;
    generateInsights({ data, type }: {
        data: any;
        type: 'dashboard' | 'matter' | 'contract';
    }): Promise<any>;
    getProviderStatus(): Promise<any>;
    switchProvider({ provider }: {
        provider: 'openai' | 'deepseek' | 'mock';
    }): Promise<{
        message: string;
        provider: "openai" | "deepseek" | "mock";
    }>;
}
