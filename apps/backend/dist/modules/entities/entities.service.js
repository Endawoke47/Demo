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
exports.EntitiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_entity_1 = require("./entities/entity.entity");
let EntitiesService = class EntitiesService {
    constructor(entityRepository) {
        this.entityRepository = entityRepository;
    }
    async create(createEntityDto) {
        const entityData = {
            ...createEntityDto,
            details: createEntityDto.details ? JSON.stringify(createEntityDto.details) : null,
            officers: createEntityDto.officers ? JSON.stringify(createEntityDto.officers) : null,
            filings: createEntityDto.filings ? JSON.stringify(createEntityDto.filings) : null,
            compliance: createEntityDto.compliance ? JSON.stringify(createEntityDto.compliance) : null,
        };
        const entity = this.entityRepository.create(entityData);
        const savedEntity = await this.entityRepository.save(entity);
        return this.deserializeEntity(savedEntity);
    }
    async findAll() {
        const entities = await this.entityRepository.find({
            order: { createdAt: 'DESC' },
        });
        return entities.map(entity => this.deserializeEntity(entity));
    }
    async findOne(id) {
        const entity = await this.entityRepository.findOne({ where: { id } });
        return entity ? this.deserializeEntity(entity) : null;
    }
    async update(id, updateEntityDto) {
        const updateData = {
            ...updateEntityDto,
            details: updateEntityDto.details ? JSON.stringify(updateEntityDto.details) : undefined,
            officers: updateEntityDto.officers ? JSON.stringify(updateEntityDto.officers) : undefined,
            filings: updateEntityDto.filings ? JSON.stringify(updateEntityDto.filings) : undefined,
            compliance: updateEntityDto.compliance ? JSON.stringify(updateEntityDto.compliance) : undefined,
        };
        await this.entityRepository.update(id, updateData);
        return this.findOne(id);
    }
    async remove(id) {
        await this.entityRepository.delete(id);
    }
    async findByType(type) {
        const entities = await this.entityRepository.find({
            where: { type },
            order: { createdAt: 'DESC' },
        });
        return entities.map(entity => this.deserializeEntity(entity));
    }
    async findByJurisdiction(jurisdiction) {
        return this.entityRepository.find({
            where: { jurisdiction },
            order: { createdAt: 'DESC' },
        });
    }
    deserializeEntity(entity) {
        if (!entity)
            return entity;
        return {
            ...entity,
            details: entity.details ? JSON.parse(entity.details) : null,
            officers: entity.officers ? JSON.parse(entity.officers) : null,
            filings: entity.filings ? JSON.parse(entity.filings) : null,
            compliance: entity.compliance ? JSON.parse(entity.compliance) : null,
        };
    }
};
exports.EntitiesService = EntitiesService;
exports.EntitiesService = EntitiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entity_entity_1.Entity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EntitiesService);
//# sourceMappingURL=entities.service.js.map