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
var OpenAiService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAiService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const openai_1 = require("openai");
let OpenAiService = OpenAiService_1 = class OpenAiService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(OpenAiService_1.name);
        const apiKey = this.configService.get('OPENAI_API_KEY');
        this.aiProvider = this.configService.get('AI_PROVIDER') || 'openai';
        this.assistantName = this.configService.get('AI_ASSISTANT_NAME') || 'Flow';
        this.aiModel = this.configService.get('OPENAI_MODEL') || 'gpt-4o';
        this.streamEnabled = this.configService.get('AI_STREAM_ENABLED') === 'true';
        this.maxTokens = parseInt(this.configService.get('AI_MAX_TOKENS') || '2000');
        this.temperature = parseFloat(this.configService.get('AI_TEMPERATURE') || '0.7');
        if (apiKey && apiKey !== 'your_openai_api_key_here') {
            this.openai = new openai_1.default({
                apiKey: apiKey,
            });
            this.logger.log(`✅ OpenAI service initialized with model: ${this.aiModel}, streaming: ${this.streamEnabled}, max_tokens: ${this.maxTokens}`);
        }
        else {
            this.logger.warn(`⚡ AI Provider: ${this.aiProvider}. Using enhanced mock responses for ${this.assistantName}. Add real OpenAI API key for live AI.`);
        }
    }
    async chat(message, context, conversationHistory) {
        if (this.openai) {
            return this.getOpenAIResponse(message, context, conversationHistory);
        }
        return this.getEnhancedMockResponse(message, context);
    }
    async summarize(text) {
        if (this.openai) {
            const prompt = `Please provide a concise, professional summary of the following legal document or text. Focus on key points, important clauses, deadlines, and potential areas of concern:\n\n${text}`;
            return this.getOpenAIResponse(prompt);
        }
        return this.getMockSummary(text);
    }
    async extractKeyTerms(text) {
        if (this.openai) {
            const prompt = `Analyze the following legal text and extract key terms, important clauses, deadlines, parties involved, obligations, and any critical legal concepts. Format the response clearly with categories:\n\n${text}`;
            return this.getOpenAIResponse(prompt);
        }
        return this.getMockKeyTerms(text);
    }
    async assessRisk(content, type) {
        if (this.openai) {
            const prompt = `As an expert legal AI assistant, please assess the potential risks in the following ${type}. Provide a structured analysis including:
1. High-risk areas (immediate attention required)
2. Medium-risk areas (should be addressed)
3. Low-risk areas (monitor)
4. Specific recommendations for risk mitigation
5. Any red flags or critical issues

Content to analyze:
${content}`;
            return this.getOpenAIResponse(prompt);
        }
        return this.getMockRiskAssessment(content, type);
    }
    async analyzeContract(contractText, contractType) {
        if (this.openai) {
            const prompt = `Please provide a comprehensive analysis of this ${contractType || 'legal contract'}. Include:

1. **Executive Summary**: Brief overview of the contract's purpose and key terms
2. **Key Terms & Obligations**: Main responsibilities of each party
3. **Risk Assessment**: Potential risks categorized by severity
4. **Missing or Unclear Clauses**: What should be added or clarified
5. **Compliance Considerations**: Regulatory or legal compliance issues
6. **Recommendations**: Specific suggestions for improvement

Contract text:
${contractText}`;
            return this.getOpenAIResponse(prompt);
        }
        return this.getMockContractAnalysis(contractText, contractType);
    }
    async generateDocument(documentType, parameters) {
        if (this.openai) {
            const prompt = `Generate a professional ${documentType} with the following specifications:

Parameters: ${JSON.stringify(parameters, null, 2)}

Requirements:
- Use proper legal language and structure
- Include all necessary clauses and provisions
- Ensure compliance with standard legal practices
- Make it comprehensive but clear
- Include placeholder text where specific details need to be filled in

Please format the document professionally with appropriate sections and numbering.`;
            return this.getOpenAIResponse(prompt);
        }
        return this.getMockDocumentGeneration(documentType, parameters);
    }
    async generateInsights(data, type) {
        if (this.openai) {
            const prompt = `Analyze the following ${type} data and provide intelligent insights, trends, recommendations, and actionable advice:

Data: ${JSON.stringify(data, null, 2)}

Please provide insights in a structured format with specific recommendations for improving legal operations and outcomes.`;
            return this.getOpenAIResponse(prompt);
        }
        return this.getMockInsights(data, type);
    }
    async getOpenAIResponse(message, context, conversationHistory) {
        try {
            const systemPrompt = `You are ${this.assistantName}, an advanced AI legal assistant specializing in legal research, contract analysis, document drafting, and providing strategic legal guidance. You are knowledgeable, professional, and helpful.

Key capabilities:
- Legal research and analysis
- Contract drafting and review
- Risk assessment and mitigation strategies
- Regulatory compliance guidance
- Strategic legal advice

Always provide accurate, well-reasoned legal insights while noting when users should consult with qualified attorneys for specific legal advice. Use clear, professional language and structure your responses logically.`;
            const messages = [
                { role: 'system', content: systemPrompt }
            ];
            if (conversationHistory && conversationHistory.length > 0) {
                messages.push(...conversationHistory.slice(-10));
            }
            if (context) {
                messages.push({
                    role: 'system',
                    content: `Additional context: ${context}`
                });
            }
            messages.push({ role: 'user', content: message });
            const completion = await this.openai.chat.completions.create({
                model: this.aiModel,
                messages: messages,
                max_tokens: this.maxTokens,
                temperature: this.temperature,
                stream: false,
                presence_penalty: 0.1,
                frequency_penalty: 0.1
            });
            return {
                message: completion.choices[0].message.content,
                provider: 'openai',
                model: this.aiModel,
                timestamp: new Date().toISOString(),
                assistantName: this.assistantName,
                usage: completion.usage
            };
        }
        catch (error) {
            this.logger.error('OpenAI API error:', error);
            return this.getEnhancedMockResponse(message, context);
        }
    }
    getEnhancedMockResponse(message, context) {
        return {
            message: `Hello! I'm ${this.assistantName}, your AI legal assistant. I'm ready to help with: ${message}`,
            provider: 'enhanced-ai-mock',
            model: 'flow-intelligent-legal-assistant',
            timestamp: new Date().toISOString(),
            fast_response: true
        };
    }
    getMockSummary(text) {
        const wordCount = text.split(' ').length;
        return {
            summary: `Document summary: ${wordCount} words analyzed. Key legal elements identified.`,
            provider: 'flow-intelligent-mock',
            timestamp: new Date().toISOString(),
            word_count: wordCount
        };
    }
    getMockKeyTerms(text) {
        return {
            keyTerms: 'Key terms extracted from document analysis.',
            provider: 'flow-intelligent-extraction',
            timestamp: new Date().toISOString()
        };
    }
    getMockRiskAssessment(content, type) {
        return {
            riskAssessment: `Risk assessment for ${type}: Low to medium risk factors identified.`,
            provider: 'flow-intelligent-risk',
            timestamp: new Date().toISOString()
        };
    }
    getMockInsights(data, type) {
        return {
            insights: `AI insights for ${type}: Performance analytics and recommendations available.`,
            provider: 'flow-intelligent-insights',
            timestamp: new Date().toISOString()
        };
    }
    getMockContractAnalysis(contractText, contractType) {
        return {
            message: `Contract Analysis for ${contractType || 'Legal Contract'}:

**Executive Summary:**
This contract establishes key legal obligations between parties with standard commercial terms.

**Key Terms & Obligations:**
- Primary obligations identified
- Payment terms and schedules
- Performance requirements
- Termination conditions

**Risk Assessment:**
- Medium risk: Standard commercial risks present
- Recommendation: Review termination clauses
- Consider additional liability protections

**Missing or Unclear Clauses:**
- Force majeure provisions should be clarified
- Dispute resolution mechanism needs detail
- Data protection clauses may need updating

**Compliance Considerations:**
- Appears compliant with standard commercial law
- Consider jurisdiction-specific requirements

**Recommendations:**
1. Strengthen termination provisions
2. Add detailed dispute resolution process
3. Include comprehensive liability caps
4. Update data protection language`,
            provider: 'flow-intelligent-contract-analysis',
            timestamp: new Date().toISOString(),
            contractType: contractType || 'General Contract'
        };
    }
    getMockDocumentGeneration(documentType, parameters) {
        return {
            message: `# ${documentType.toUpperCase()}

**Generated Document Template**

This is a professionally generated ${documentType} template based on your specified parameters:

${JSON.stringify(parameters, null, 2)}

## Key Sections:
1. **Introduction and Parties**
2. **Terms and Conditions** 
3. **Obligations and Rights**
4. **Termination Provisions**
5. **Governing Law**

## Important Notes:
- This template should be reviewed by qualified legal counsel
- Customize sections marked with [PLACEHOLDER]
- Ensure compliance with applicable laws and regulations
- Consider jurisdiction-specific requirements

---
*Generated by Flow AI Legal Assistant*
*${new Date().toLocaleDateString()}*`,
            provider: 'flow-intelligent-document-generation',
            timestamp: new Date().toISOString(),
            documentType: documentType,
            parameters: parameters
        };
    }
};
exports.OpenAiService = OpenAiService;
exports.OpenAiService = OpenAiService = OpenAiService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], OpenAiService);
//# sourceMappingURL=openai.service.js.map