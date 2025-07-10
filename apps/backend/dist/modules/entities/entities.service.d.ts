import { Repository } from 'typeorm';
import { Entity, EntityData } from './entities/entity.entity';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
export declare class EntitiesService {
    private readonly entityRepository;
    constructor(entityRepository: Repository<Entity>);
    create(createEntityDto: CreateEntityDto): Promise<EntityData>;
    findAll(): Promise<EntityData[]>;
    findOne(id: string): Promise<EntityData>;
    update(id: string, updateEntityDto: UpdateEntityDto): Promise<EntityData>;
    remove(id: string): Promise<void>;
    findByType(type: string): Promise<EntityData[]>;
    findByJurisdiction(jurisdiction: string): Promise<Entity[]>;
    private deserializeEntity;
}
