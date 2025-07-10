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
exports.MattersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const matter_entity_1 = require("./entities/matter.entity");
let MattersService = class MattersService {
    constructor(mattersRepository) {
        this.mattersRepository = mattersRepository;
    }
    async create(createMatterDto) {
        const matterData = {
            ...createMatterDto,
            tags: Array.isArray(createMatterDto.tags)
                ? createMatterDto.tags.join(',')
                : createMatterDto.tags,
            customFields: typeof createMatterDto.customFields === 'object'
                ? JSON.stringify(createMatterDto.customFields)
                : createMatterDto.customFields,
        };
        const matter = this.mattersRepository.create(matterData);
        const result = await this.mattersRepository.save(matter);
        return Array.isArray(result) ? result[0] : result;
    }
    async findAll() {
        return this.mattersRepository.find({
            relations: ['assignedLawyer'],
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const matter = await this.mattersRepository.findOne({
            where: { id },
            relations: ['assignedLawyer'],
        });
        if (!matter) {
            throw new common_1.NotFoundException(`Matter with ID "${id}" not found`);
        }
        return matter;
    }
    async update(id, updateMatterDto) {
        const updateData = {
            ...updateMatterDto,
            tags: Array.isArray(updateMatterDto.tags)
                ? updateMatterDto.tags.join(',')
                : updateMatterDto.tags,
            customFields: typeof updateMatterDto.customFields === 'object'
                ? JSON.stringify(updateMatterDto.customFields)
                : updateMatterDto.customFields,
        };
        await this.mattersRepository.update(id, updateData);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.mattersRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Matter with ID "${id}" not found`);
        }
    }
    async findByClient(clientName) {
        return this.mattersRepository.find({
            where: { clientName },
            relations: ['assignedLawyer'],
            order: { createdAt: 'DESC' },
        });
    }
    async findByStatus(status) {
        return this.mattersRepository.find({
            where: { status },
            relations: ['assignedLawyer'],
            order: { createdAt: 'DESC' },
        });
    }
    async getStatistics() {
        const [total, active, pending, closed] = await Promise.all([
            this.mattersRepository.count(),
            this.mattersRepository.count({ where: { status: 'active' } }),
            this.mattersRepository.count({ where: { status: 'pending' } }),
            this.mattersRepository.count({ where: { status: 'closed' } }),
        ]);
        return { total, active, pending, closed };
    }
};
exports.MattersService = MattersService;
exports.MattersService = MattersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(matter_entity_1.Matter)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MattersService);
//# sourceMappingURL=matters.service.js.map