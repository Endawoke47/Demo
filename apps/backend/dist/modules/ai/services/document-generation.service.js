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
exports.DocumentGenerationService = void 0;
const common_1 = require("@nestjs/common");
const openai_service_1 = require("./openai.service");
let DocumentGenerationService = class DocumentGenerationService {
    constructor(openAiService) {
        this.openAiService = openAiService;
    }
    async generate(generationDto) {
        const templates = {
            nda: 'Generate a Non-Disclosure Agreement with standard confidentiality provisions',
            employment: 'Generate an Employment Agreement with terms and conditions',
            service: 'Generate a Service Agreement with scope and deliverables',
            partnership: 'Generate a Partnership Agreement with profit sharing and responsibilities',
        };
        const template = templates[generationDto.documentType] || 'Generate a legal document';
        const prompt = `${template} using the following parameters:
${JSON.stringify(generationDto.parameters, null, 2)}

Please create a comprehensive, legally sound document with:
1. Proper legal language and structure
2. Clear terms and conditions
3. Standard protective clauses
4. Appropriate signatures and date sections
5. Legal disclaimers where necessary

Format the output as a complete document ready for review by legal counsel.`;
        return this.openAiService.chat(prompt, 'document_generation');
    }
};
exports.DocumentGenerationService = DocumentGenerationService;
exports.DocumentGenerationService = DocumentGenerationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [openai_service_1.OpenAiService])
], DocumentGenerationService);
//# sourceMappingURL=document-generation.service.js.map