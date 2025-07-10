"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const ai_provider_service_1 = require("./services/ai-provider.service");
const legal_research_service_1 = require("./services/legal-research.service");
const contract_analysis_service_1 = require("./services/contract-analysis.service");
const document_generation_service_1 = require("./services/document-generation.service");
let AiService = class AiService {
    constructor(aiProviderService, legalResearchService, contractAnalysisService, documentGenerationService) {
        this.aiProviderService = aiProviderService;
        this.legalResearchService = legalResearchService;
        this.contractAnalysisService = contractAnalysisService;
        this.documentGenerationService = documentGenerationService;
    }
    async chat(chatMessageDto) {
        const response = await this.aiProviderService.chat(chatMessageDto.message, chatMessageDto.context);
        return {
            message: response.message || response.response,
            assistantName: response.assistantName || 'Flow',
            provider: response.provider,
            model: response.model,
            timestamp: response.timestamp,
            usage: response.usage
        };
    }
    async legalResearch(legalResearchDto) {
        return this.legalResearchService.research(legalResearchDto);
    }
    async analyzeContract(contractAnalysisDto) {
        const aiResponse = await this.aiProviderService.analyzeContract(contractAnalysisDto.contractText, contractAnalysisDto.contractType);
        const detailedAnalysis = await this.contractAnalysisService.analyze(contractAnalysisDto);
        return {
            ...detailedAnalysis,
            aiAnalysis: aiResponse.message,
            provider: aiResponse.provider,
            timestamp: aiResponse.timestamp
        };
    }
    async generateDocument(documentGenerationDto) {
        return this.aiProviderService.generateDocument(documentGenerationDto.documentType, documentGenerationDto.parameters);
    }
    async summarizeText(text) {
        return this.aiProviderService.summarize(text);
    }
    async extractKeyTerms(text) {
        return this.aiProviderService.extractKeyTerms(text);
    }
    async assessRisk(content, type) {
        return this.aiProviderService.assessRisk(content, type);
    }
    async generateInsights(data, type) {
        return this.aiProviderService.generateInsights(data, type);
    }
    async getProviderStatus() {
        return this.aiProviderService.getProviderStatus();
    }
    async switchProvider(provider) {
        return this.aiProviderService.switchProvider(provider);
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ai_provider_service_1.AIProviderService,
        legal_research_service_1.LegalResearchService,
        contract_analysis_service_1.ContractAnalysisService,
        document_generation_service_1.DocumentGenerationService])
], AiService);
//# sourceMappingURL=ai.service.js.map