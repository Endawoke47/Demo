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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const contract_entity_1 = require("./entities/contract.entity");
let ContractsService = class ContractsService {
    constructor(contractsRepository) {
        this.contractsRepository = contractsRepository;
    }
    async create(createContractDto) {
        const contractData = {
            ...createContractDto,
            parties: Array.isArray(createContractDto.parties)
                ? JSON.stringify(createContractDto.parties)
                : createContractDto.parties,
            keyTerms: typeof createContractDto.keyTerms === 'object'
                ? JSON.stringify(createContractDto.keyTerms)
                : createContractDto.keyTerms,
            riskAssessment: typeof createContractDto.riskAssessment === 'object'
                ? JSON.stringify(createContractDto.riskAssessment)
                : createContractDto.riskAssessment,
            tags: Array.isArray(createContractDto.tags)
                ? createContractDto.tags.join(',')
                : createContractDto.tags,
        };
        const contract = this.contractsRepository.create(contractData);
        const result = await this.contractsRepository.save(contract);
        return Array.isArray(result) ? result[0] : result;
    }
    async findAll() {
        return this.contractsRepository.find({
            relations: ['assignedLawyer', 'matter'],
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const contract = await this.contractsRepository.findOne({
            where: { id },
            relations: ['assignedLawyer', 'matter'],
        });
        if (!contract) {
            throw new common_1.NotFoundException(`Contract with ID "${id}" not found`);
        }
        return contract;
    }
    async update(id, updateContractDto) {
        const updateData = {
            ...updateContractDto,
            parties: Array.isArray(updateContractDto.parties)
                ? JSON.stringify(updateContractDto.parties)
                : updateContractDto.parties,
            keyTerms: typeof updateContractDto.keyTerms === 'object'
                ? JSON.stringify(updateContractDto.keyTerms)
                : updateContractDto.keyTerms,
            riskAssessment: typeof updateContractDto.riskAssessment === 'object'
                ? JSON.stringify(updateContractDto.riskAssessment)
                : updateContractDto.riskAssessment,
            tags: Array.isArray(updateContractDto.tags)
                ? updateContractDto.tags.join(',')
                : updateContractDto.tags,
        };
        await this.contractsRepository.update(id, updateData);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.contractsRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Contract with ID "${id}" not found`);
        }
    }
    async findByStatus(status) {
        return this.contractsRepository.find({
            where: { status },
            relations: ['assignedLawyer', 'matter'],
            order: { createdAt: 'DESC' },
        });
    }
    async findByType(type) {
        return this.contractsRepository.find({
            where: { type },
            relations: ['assignedLawyer', 'matter'],
            order: { createdAt: 'DESC' },
        });
    }
    async findExpiringSoon(days = 30) {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + days);
        return this.contractsRepository
            .createQueryBuilder('contract')
            .leftJoinAndSelect('contract.assignedLawyer', 'assignedLawyer')
            .leftJoinAndSelect('contract.matter', 'matter')
            .where('contract.expirationDate <= :futureDate', { futureDate })
            .andWhere('contract.expirationDate > :now', { now: new Date() })
            .andWhere('contract.status IN (:...statuses)', { statuses: ['executed', 'review'] })
            .orderBy('contract.expirationDate', 'ASC')
            .getMany();
    }
    async getStatistics() {
        const [total, draft, review, executed, expired] = await Promise.all([
            this.contractsRepository.count(),
            this.contractsRepository.count({ where: { status: 'draft' } }),
            this.contractsRepository.count({ where: { status: 'review' } }),
            this.contractsRepository.count({ where: { status: 'executed' } }),
            this.contractsRepository.count({ where: { status: 'expired' } }),
        ]);
        const totalValue = await this.contractsRepository
            .createQueryBuilder('contract')
            .select('SUM(contract.value)', 'sum')
            .where('contract.status = :status', { status: 'executed' })
            .getRawOne();
        return {
            total,
            draft,
            review,
            executed,
            expired,
            totalValue: totalValue?.sum || 0
        };
    }
    async findByMatter(matterId) {
        return this.contractsRepository.find({
            where: { matterId },
            relations: ['assignedLawyer', 'matter'],
            order: { createdAt: 'DESC' },
        });
    }
};
exports.ContractsService = ContractsService;
exports.ContractsService = ContractsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contract_entity_1.Contract)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContractsService);
//# sourceMappingURL=contracts.service.js.map