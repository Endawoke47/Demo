import { EntitiesService } from './entities.service';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
export declare class EntitiesController {
    private readonly entitiesService;
    constructor(entitiesService: EntitiesService);
    create(createEntityDto: CreateEntityDto): Promise<import("./entities/entity.entity").EntityData>;
    findAll(type?: string, jurisdiction?: string): Promise<import("./entities/entity.entity").EntityData[]> | Promise<import("./entities/entity.entity").Entity[]>;
    findOne(id: string): Promise<import("./entities/entity.entity").EntityData>;
    update(id: string, updateEntityDto: UpdateEntityDto): Promise<import("./entities/entity.entity").EntityData>;
    remove(id: string): Promise<void>;
}
