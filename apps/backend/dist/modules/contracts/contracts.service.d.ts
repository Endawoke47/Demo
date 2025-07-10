import { Repository } from 'typeorm';
import { Contract } from './entities/contract.entity';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
export declare class ContractsService {
    private contractsRepository;
    constructor(contractsRepository: Repository<Contract>);
    create(createContractDto: CreateContractDto): Promise<Contract>;
    findAll(): Promise<Contract[]>;
    findOne(id: string): Promise<Contract>;
    update(id: string, updateContractDto: UpdateContractDto): Promise<Contract>;
    remove(id: string): Promise<void>;
    findByStatus(status: string): Promise<Contract[]>;
    findByType(type: string): Promise<Contract[]>;
    findExpiringSoon(days?: number): Promise<Contract[]>;
    getStatistics(): Promise<{
        total: number;
        draft: number;
        review: number;
        executed: number;
        expired: number;
        totalValue: any;
    }>;
    findByMatter(matterId: string): Promise<Contract[]>;
}
