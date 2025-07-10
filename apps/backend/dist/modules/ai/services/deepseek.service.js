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
var DeepSeekService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepSeekService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
let DeepSeekService = DeepSeekService_1 = class DeepSeekService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(DeepSeekService_1.name);
        this.apiKey = this.configService.get('DEEPSEEK_API_KEY');
        this.baseUrl = this.configService.get('DEEPSEEK_BASE_URL') || 'https://api.deepseek.com';
        this.model = this.configService.get('DEEPSEEK_MODEL') || 'deepseek-chat';
        if (this.apiKey) {
            this.logger.log(`✅ DeepSeek service initialized with model: ${this.model}`);
        }
        else {
            this.logger.warn('⚠️  DeepSeek API key not provided');
        }
    }
    async chat(message, context, conversationHistory) {
        if (!this.apiKey) {
            throw new Error('DeepSeek API key not configured');
        }
        try {
            const messages = [
                {
                    role: 'system',
                    content: `You are Flow, an advanced AI legal assistant specializing in legal research, contract analysis, document drafting, and providing strategic legal guidance. You are knowledgeable, professional, and helpful. Always provide accurate, well-reasoned legal insights while noting when users should consult with qualified attorneys for specific legal advice.`
                }
            ];
            if (conversationHistory && conversationHistory.length > 0) {
                messages.push(...conversationHistory);
            }
            if (context) {
                messages.push({
                    role: 'system',
                    content: `Additional context: ${context}`
                });
            }
            messages.push({
                role: 'user',
                content: message
            });
            const response = await axios_1.default.post(`${this.baseUrl}/v1/chat/completions`, {
                model: this.model,
                messages: messages,
                max_tokens: 2000,
                temperature: 0.7,
                stream: false
            }, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
            return {
                message: response.data.choices[0].message.content,
                provider: 'deepseek',
                model: this.model,
                timestamp: new Date().toISOString(),
                assistantName: 'Flow',
                usage: response.data.usage
            };
        }
        catch (error) {
            this.logger.error('DeepSeek API error:', error.response?.data || error.message);
            throw new Error('Failed to get response from DeepSeek');
        }
    }
    async summarize(text) {
        const prompt = `Please provide a concise summary of the following legal document or text, highlighting key points, important clauses, and potential areas of concern:\n\n${text}`;
        return this.chat(prompt);
    }
    async extractKeyTerms(text) {
        const prompt = `Analyze the following legal text and extract key terms, important clauses, deadlines, parties involved, and any critical legal concepts:\n\n${text}`;
        return this.chat(prompt);
    }
    async assessRisk(content, type) {
        const prompt = `As a legal AI assistant, please assess the potential risks in the following ${type}. Identify high, medium, and low-risk areas, provide recommendations for mitigation, and highlight any red flags:\n\n${content}`;
        return this.chat(prompt);
    }
    async analyzeContract(contractText, contractType) {
        const prompt = `Please analyze this ${contractType || 'legal contract'} and provide:
1. Summary of key terms and obligations
2. Potential risks and concerns
3. Missing or unclear clauses
4. Recommendations for improvement
5. Compliance considerations

Contract text:
${contractText}`;
        return this.chat(prompt);
    }
    async generateDocument(documentType, parameters) {
        const prompt = `Generate a professional ${documentType} with the following parameters: ${JSON.stringify(parameters)}. Please ensure the document is legally sound, professional, and includes all necessary clauses and provisions.`;
        return this.chat(prompt);
    }
};
exports.DeepSeekService = DeepSeekService;
exports.DeepSeekService = DeepSeekService = DeepSeekService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], DeepSeekService);
//# sourceMappingURL=deepseek.service.js.map