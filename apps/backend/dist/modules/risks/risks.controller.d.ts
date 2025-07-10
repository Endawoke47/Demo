import { RisksService } from './risks.service';
import { CreateRiskDto, UpdateRiskDto } from './dto/risk.dto';
export declare class RisksController {
    private readonly risksService;
    constructor(risksService: RisksService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(createRiskDto: CreateRiskDto): Promise<{
        createdAt: string;
        updatedAt: string;
        title: string;
        description: string;
        category: string;
        likelihood: "low" | "medium" | "high";
        impact: "low" | "medium" | "high";
        status: "open" | "mitigated" | "closed";
        owner: string;
        tags?: string[];
        documentUrl?: string;
        relatedMatters?: string[];
        createdBy: string;
        id: string;
    }>;
    update(id: string, updateRiskDto: UpdateRiskDto): Promise<any>;
    remove(id: string): Promise<any>;
}
