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
exports.LegalResearchService = void 0;
const common_1 = require("@nestjs/common");
const openai_service_1 = require("./openai.service");
let LegalResearchService = class LegalResearchService {
    constructor(openAiService) {
        this.openAiService = openAiService;
    }
    async research(researchDto) {
        const prompt = `Conduct legal research on: ${researchDto.query}
    ${researchDto.jurisdiction ? `Jurisdiction: ${researchDto.jurisdiction}` : ''}
    ${researchDto.keywords ? `Keywords: ${researchDto.keywords.join(', ')}` : ''}
    
    Please provide:
    1. Relevant case law and precedents
    2. Applicable statutes and regulations
    3. Legal principles and doctrines
    4. Recent developments in this area
    5. Practical recommendations`;
        return this.openAiService.chat(prompt, 'legal_research');
    }
};
exports.LegalResearchService = LegalResearchService;
exports.LegalResearchService = LegalResearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [openai_service_1.OpenAiService])
], LegalResearchService);
//# sourceMappingURL=legal-research.service.js.map