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
exports.ContractAnalysisService = void 0;
const common_1 = require("@nestjs/common");
const openai_service_1 = require("./openai.service");
let ContractAnalysisService = class ContractAnalysisService {
    constructor(openAiService) {
        this.openAiService = openAiService;
    }
    async analyze(analysisDto) {
        const prompt = `Analyze this ${analysisDto.contractType || 'legal'} contract:

${analysisDto.contractText}

Please provide a comprehensive analysis including:
1. Summary of key terms and obligations
2. Risk assessment and potential issues
3. Missing or unclear provisions
4. Recommendations for improvement
5. Compliance considerations
6. Negotiation points`;
        return this.openAiService.chat(prompt, 'contract_analysis');
    }
};
exports.ContractAnalysisService = ContractAnalysisService;
exports.ContractAnalysisService = ContractAnalysisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [openai_service_1.OpenAiService])
], ContractAnalysisService);
//# sourceMappingURL=contract-analysis.service.js.map