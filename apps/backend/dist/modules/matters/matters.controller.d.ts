import { MattersService } from './matters.service';
import { CreateMatterDto } from './dto/create-matter.dto';
import { UpdateMatterDto } from './dto/update-matter.dto';
export declare class MattersController {
    private readonly mattersService;
    constructor(mattersService: MattersService);
    create(createMatterDto: CreateMatterDto): Promise<import("./entities/matter.entity").Matter>;
    findAll(): Promise<import("./entities/matter.entity").Matter[]>;
    getStatistics(): Promise<{
        total: number;
        active: number;
        pending: number;
        closed: number;
    }>;
    findByClient(clientName: string): Promise<import("./entities/matter.entity").Matter[]>;
    findByStatus(status: string): Promise<import("./entities/matter.entity").Matter[]>;
    findOne(id: string): Promise<import("./entities/matter.entity").Matter>;
    update(id: string, updateMatterDto: UpdateMatterDto): Promise<import("./entities/matter.entity").Matter>;
    remove(id: string): Promise<void>;
}
