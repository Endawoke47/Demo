import { OpenAiService } from './openai.service';
import { LegalResearchDto } from '../dto/legal-research.dto';
export declare class LegalResearchService {
    private openAiService;
    constructor(openAiService: OpenAiService);
    research(researchDto: LegalResearchDto): Promise<any>;
}
