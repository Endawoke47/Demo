"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RisksService = void 0;
const common_1 = require("@nestjs/common");
let RisksService = class RisksService {
    constructor() {
        this.risks = [
            {
                id: '1',
                title: 'Data Breach Risk',
                description: 'Potential risk of data breach due to outdated security protocols',
                category: 'Cybersecurity',
                likelihood: 'medium',
                impact: 'high',
                status: 'open',
                owner: 'John Doe',
                tags: ['security', 'data'],
                documentUrl: '',
                relatedMatters: [],
                createdBy: 'admin',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: '2',
                title: 'Compliance Risk',
                description: 'Risk of non-compliance with new regulations',
                category: 'Legal',
                likelihood: 'low',
                impact: 'medium',
                status: 'open',
                owner: 'Jane Smith',
                tags: ['compliance', 'regulations'],
                documentUrl: '',
                relatedMatters: [],
                createdBy: 'admin',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }
        ];
    }
    async findAll() {
        return this.risks;
    }
    async findOne(id) {
        return this.risks.find(risk => risk.id === id);
    }
    async create(createRiskDto) {
        const newRisk = {
            id: Math.random().toString(36).slice(2),
            ...createRiskDto,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        this.risks.push(newRisk);
        return newRisk;
    }
    async update(id, updateRiskDto) {
        const index = this.risks.findIndex(risk => risk.id === id);
        if (index === -1) {
            throw new Error('Risk not found');
        }
        this.risks[index] = {
            ...this.risks[index],
            ...updateRiskDto,
            updatedAt: new Date().toISOString(),
        };
        return this.risks[index];
    }
    async remove(id) {
        const index = this.risks.findIndex(risk => risk.id === id);
        if (index === -1) {
            throw new Error('Risk not found');
        }
        const removed = this.risks.splice(index, 1);
        return removed[0];
    }
};
exports.RisksService = RisksService;
exports.RisksService = RisksService = __decorate([
    (0, common_1.Injectable)()
], RisksService);
//# sourceMappingURL=risks.service.js.map