import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
export declare class ContractsController {
    private readonly contractsService;
    constructor(contractsService: ContractsService);
    create(createContractDto: CreateContractDto): Promise<import("./entities/contract.entity").Contract>;
    findAll(status?: string, type?: string): Promise<import("./entities/contract.entity").Contract[]>;
    getStatistics(): Promise<{
        total: number;
        draft: number;
        review: number;
        executed: number;
        expired: number;
        totalValue: any;
    }>;
    findExpiringSoon(days?: string): Promise<import("./entities/contract.entity").Contract[]>;
    findOne(id: string): Promise<import("./entities/contract.entity").Contract>;
    update(id: string, updateContractDto: UpdateContractDto): Promise<import("./entities/contract.entity").Contract>;
    remove(id: string): Promise<{
        message: string;
    }>;
    findByMatter(matterId: string): Promise<import("./entities/contract.entity").Contract[]>;
}
