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
exports.RisksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const risks_service_1 = require("./risks.service");
const risk_dto_1 = require("./dto/risk.dto");
let RisksController = class RisksController {
    constructor(risksService) {
        this.risksService = risksService;
    }
    async findAll() {
        return this.risksService.findAll();
    }
    async findOne(id) {
        return this.risksService.findOne(id);
    }
    async create(createRiskDto) {
        return this.risksService.create(createRiskDto);
    }
    async update(id, updateRiskDto) {
        return this.risksService.update(id, updateRiskDto);
    }
    async remove(id) {
        return this.risksService.remove(id);
    }
};
exports.RisksController = RisksController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all risk items' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Risk items retrieved successfully' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RisksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get risk item by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Risk item retrieved successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RisksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create new risk item' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Risk item created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [risk_dto_1.CreateRiskDto]),
    __metadata("design:returntype", Promise)
], RisksController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update risk item' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Risk item updated successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, risk_dto_1.UpdateRiskDto]),
    __metadata("design:returntype", Promise)
], RisksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete risk item' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Risk item deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RisksController.prototype, "remove", null);
exports.RisksController = RisksController = __decorate([
    (0, swagger_1.ApiTags)('risks'),
    (0, common_1.Controller)('risks'),
    __metadata("design:paramtypes", [risks_service_1.RisksService])
], RisksController);
//# sourceMappingURL=risks.controller.js.map