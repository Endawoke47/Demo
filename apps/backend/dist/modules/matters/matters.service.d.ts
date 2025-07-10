import { Repository } from 'typeorm';
import { Matter } from './entities/matter.entity';
import { CreateMatterDto } from './dto/create-matter.dto';
import { UpdateMatterDto } from './dto/update-matter.dto';
export declare class MattersService {
    private mattersRepository;
    constructor(mattersRepository: Repository<Matter>);
    create(createMatterDto: CreateMatterDto): Promise<Matter>;
    findAll(): Promise<Matter[]>;
    findOne(id: string): Promise<Matter>;
    update(id: string, updateMatterDto: UpdateMatterDto): Promise<Matter>;
    remove(id: string): Promise<void>;
    findByClient(clientName: string): Promise<Matter[]>;
    findByStatus(status: string): Promise<Matter[]>;
    getStatistics(): Promise<{
        total: number;
        active: number;
        pending: number;
        closed: number;
    }>;
}
