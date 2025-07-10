import { OpenAiService } from './openai.service';
import { ContractAnalysisDto } from '../dto/contract-analysis.dto';
export declare class ContractAnalysisService {
    private openAiService;
    constructor(openAiService: OpenAiService);
    analyze(analysisDto: ContractAnalysisDto): Promise<any>;
}
