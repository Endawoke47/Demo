import { PoliciesService } from './policies.service';
export declare class PoliciesController {
    private readonly policiesService;
    constructor(policiesService: PoliciesService);
    create(createPolicyDto: any): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePolicyDto: any): string;
    remove(id: string): string;
}
