import { AIProviderService } from './services/ai-provider.service';
import { LegalResearchService } from './services/legal-research.service';
import { ContractAnalysisService } from './services/contract-analysis.service';
import { DocumentGenerationService } from './services/document-generation.service';
import { ChatMessageDto } from './dto/chat-message.dto';
import { LegalResearchDto } from './dto/legal-research.dto';
import { ContractAnalysisDto } from './dto/contract-analysis.dto';
import { DocumentGenerationDto } from './dto/document-generation.dto';
export declare class AiService {
    private aiProviderService;
    private legalResearchService;
    private contractAnalysisService;
    private documentGenerationService;
    constructor(aiProviderService: AIProviderService, legalResearchService: LegalResearchService, contractAnalysisService: ContractAnalysisService, documentGenerationService: DocumentGenerationService);
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
    summarizeText(text: string): Promise<any>;
    extractKeyTerms(text: string): Promise<any>;
    assessRisk(content: string, type: 'contract' | 'matter' | 'general'): Promise<any>;
    generateInsights(data: any, type: 'dashboard' | 'matter' | 'contract'): Promise<any>;
    getProviderStatus(): Promise<any>;
    switchProvider(provider: 'openai' | 'deepseek' | 'mock'): Promise<void>;
}
