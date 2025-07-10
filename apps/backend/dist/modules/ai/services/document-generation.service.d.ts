import { OpenAiService } from './openai.service';
import { DocumentGenerationDto } from '../dto/document-generation.dto';
export declare class DocumentGenerationService {
    private openAiService;
    constructor(openAiService: OpenAiService);
    generate(generationDto: DocumentGenerationDto): Promise<any>;
}
