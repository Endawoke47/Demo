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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ai_service_1 = require("./ai.service");
const chat_message_dto_1 = require("./dto/chat-message.dto");
const legal_research_dto_1 = require("./dto/legal-research.dto");
const contract_analysis_dto_1 = require("./dto/contract-analysis.dto");
const document_generation_dto_1 = require("./dto/document-generation.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let AiController = class AiController {
    constructor(aiService) {
        this.aiService = aiService;
    }
    async chat(chatMessageDto) {
        return this.aiService.chat(chatMessageDto);
    }
    async legalResearch(legalResearchDto) {
        return this.aiService.legalResearch(legalResearchDto);
    }
    async analyzeContract(contractAnalysisDto) {
        return this.aiService.analyzeContract(contractAnalysisDto);
    }
    async generateDocument(documentGenerationDto) {
        return this.aiService.generateDocument(documentGenerationDto);
    }
    async summarizeText({ text }) {
        return this.aiService.summarizeText(text);
    }
    async extractKeyTerms({ text }) {
        return this.aiService.extractKeyTerms(text);
    }
    async assessRisk({ content, type }) {
        return this.aiService.assessRisk(content, type);
    }
    async generateInsights({ data, type }) {
        return this.aiService.generateInsights(data, type);
    }
    async getProviderStatus() {
        return this.aiService.getProviderStatus();
    }
    async switchProvider({ provider }) {
        await this.aiService.switchProvider(provider);
        return { message: `Switched to ${provider} provider`, provider };
    }
};
exports.AiController = AiController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Chat with AI assistant' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'AI response generated successfully' }),
    (0, common_1.Post)('chat'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chat_message_dto_1.ChatMessageDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "chat", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Perform legal research' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Legal research completed successfully' }),
    (0, common_1.Post)('research'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [legal_research_dto_1.LegalResearchDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "legalResearch", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Analyze contract' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Contract analysis completed successfully' }),
    (0, common_1.Post)('analyze-contract'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contract_analysis_dto_1.ContractAnalysisDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "analyzeContract", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Generate legal document' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Document generated successfully' }),
    (0, common_1.Post)('generate-document'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [document_generation_dto_1.DocumentGenerationDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "generateDocument", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Summarize text' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Text summarized successfully' }),
    (0, common_1.Post)('summarize'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "summarizeText", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Extract key terms' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Key terms extracted successfully' }),
    (0, common_1.Post)('extract-terms'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "extractKeyTerms", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Assess risk' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Risk assessment completed successfully' }),
    (0, common_1.Post)('assess-risk'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "assessRisk", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Generate insights' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Insights generated successfully' }),
    (0, common_1.Post)('generate-insights'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "generateInsights", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get AI provider status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Provider status retrieved successfully' }),
    (0, common_1.Get)('provider-status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AiController.prototype, "getProviderStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Switch AI provider' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'AI provider switched successfully' }),
    (0, common_1.Patch)('switch-provider'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "switchProvider", null);
exports.AiController = AiController = __decorate([
    (0, swagger_1.ApiTags)('AI Services'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('ai'),
    __metadata("design:paramtypes", [ai_service_1.AiService])
], AiController);
//# sourceMappingURL=ai.controller.js.map