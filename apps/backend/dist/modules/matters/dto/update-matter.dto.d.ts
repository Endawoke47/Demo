import { CreateMatterDto } from './create-matter.dto';
declare const UpdateMatterDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMatterDto>>;
export declare class UpdateMatterDto extends UpdateMatterDto_base {
    closedAt?: string;
}
export {};
