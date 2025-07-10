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
var AIProviderService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIProviderService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const openai_service_1 = require("./openai.service");
const deepseek_service_1 = require("./deepseek.service");
let AIProviderService = AIProviderService_1 = class AIProviderService {
    constructor(configService, openAiService, deepSeekService) {
        this.configService = configService;
        this.openAiService = openAiService;
        this.deepSeekService = deepSeekService;
        this.logger = new common_1.Logger(AIProviderService_1.name);
        this.currentProvider = this.configService.get('AI_PROVIDER') || 'mock';
        this.logger.log(`🤖 AI Provider Service initialized with provider: ${this.currentProvider}`);
    }
    async chat(message, context, conversationHistory) {
        try {
            switch (this.currentProvider) {
                case 'openai':
                    return await this.openAiService.chat(message, context, conversationHistory);
                case 'deepseek':
                    return await this.deepSeekService.chat(message, context, conversationHistory);
                default:
                    return await this.openAiService.chat(message, context, conversationHistory);
            }
        }
        catch (error) {
            this.logger.error(`Error with ${this.currentProvider} provider:`, error.message);
            return await this.openAiService.chat(message, context, conversationHistory);
        }
    }
    async summarize(text) {
        try {
            switch (this.currentProvider) {
                case 'openai':
                    return await this.openAiService.summarize(text);
                case 'deepseek':
                    return await this.deepSeekService.summarize(text);
                default:
                    return await this.openAiService.summarize(text);
            }
        }
        catch (error) {
            this.logger.error(`Error with ${this.currentProvider} provider:`, error.message);
            return await this.openAiService.summarize(text);
        }
    }
    async extractKeyTerms(text) {
        try {
            switch (this.currentProvider) {
                case 'openai':
                    return await this.openAiService.extractKeyTerms(text);
                case 'deepseek':
                    return await this.deepSeekService.extractKeyTerms(text);
                default:
                    return await this.openAiService.extractKeyTerms(text);
            }
        }
        catch (error) {
            this.logger.error(`Error with ${this.currentProvider} provider:`, error.message);
            return await this.openAiService.extractKeyTerms(text);
        }
    }
    async assessRisk(content, type) {
        try {
            switch (this.currentProvider) {
                case 'openai':
                    return await this.openAiService.assessRisk(content, type);
                case 'deepseek':
                    return await this.deepSeekService.assessRisk(content, type);
                default:
                    return await this.openAiService.assessRisk(content, type);
            }
        }
        catch (error) {
            this.logger.error(`Error with ${this.currentProvider} provider:`, error.message);
            return await this.openAiService.assessRisk(content, type);
        }
    }
    async analyzeContract(contractText, contractType) {
        try {
            switch (this.currentProvider) {
                case 'openai':
                    return await this.openAiService.analyzeContract(contractText, contractType);
                case 'deepseek':
                    return await this.deepSeekService.analyzeContract(contractText, contractType);
                default:
                    return await this.openAiService.analyzeContract(contractText, contractType);
            }
        }
        catch (error) {
            this.logger.error(`Error with ${this.currentProvider} provider:`, error.message);
            return await this.openAiService.analyzeContract(contractText, contractType);
        }
    }
    async generateDocument(documentType, parameters) {
        try {
            switch (this.currentProvider) {
                case 'openai':
                    return await this.openAiService.generateDocument(documentType, parameters);
                case 'deepseek':
                    return await this.deepSeekService.generateDocument(documentType, parameters);
                default:
                    return await this.openAiService.generateDocument(documentType, parameters);
            }
        }
        catch (error) {
            this.logger.error(`Error with ${this.currentProvider} provider:`, error.message);
            return await this.openAiService.generateDocument(documentType, parameters);
        }
    }
    async generateInsights(data, type) {
        try {
            switch (this.currentProvider) {
                case 'openai':
                    return await this.openAiService.generateInsights(data, type);
                case 'deepseek':
                    return await this.openAiService.generateInsights(data, type);
                default:
                    return await this.openAiService.generateInsights(data, type);
            }
        }
        catch (error) {
            this.logger.error(`Error with ${this.currentProvider} provider:`, error.message);
            return await this.openAiService.generateInsights(data, type);
        }
    }
    getCurrentProvider() {
        return this.currentProvider;
    }
    async switchProvider(provider) {
        this.currentProvider = provider;
        this.logger.log(`🔄 Switched AI provider to: ${provider}`);
    }
    async getProviderStatus() {
        return {
            currentProvider: this.currentProvider,
            available: {
                openai: !!this.configService.get('OPENAI_API_KEY'),
                deepseek: !!this.configService.get('DEEPSEEK_API_KEY'),
                mock: true
            },
            models: {
                openai: this.configService.get('OPENAI_MODEL') || 'gpt-4o',
                deepseek: this.configService.get('DEEPSEEK_MODEL') || 'deepseek-chat'
            }
        };
    }
};
exports.AIProviderService = AIProviderService;
exports.AIProviderService = AIProviderService = AIProviderService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        openai_service_1.OpenAiService,
        deepseek_service_1.DeepSeekService])
], AIProviderService);
//# sourceMappingURL=ai-provider.service.js.map