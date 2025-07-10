import { KnowledgeService } from './knowledge.service';
export declare class KnowledgeController {
    private readonly knowledgeService;
    constructor(knowledgeService: KnowledgeService);
    create(createKnowledgeDto: any): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateKnowledgeDto: any): string;
    remove(id: string): string;
}
