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
exports.MattersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const matters_service_1 = require("./matters.service");
const create_matter_dto_1 = require("./dto/create-matter.dto");
const update_matter_dto_1 = require("./dto/update-matter.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let MattersController = class MattersController {
    constructor(mattersService) {
        this.mattersService = mattersService;
    }
    create(createMatterDto) {
        return this.mattersService.create(createMatterDto);
    }
    findAll() {
        return this.mattersService.findAll();
    }
    getStatistics() {
        return this.mattersService.getStatistics();
    }
    findByClient(clientName) {
        return this.mattersService.findByClient(clientName);
    }
    findByStatus(status) {
        return this.mattersService.findByStatus(status);
    }
    findOne(id) {
        return this.mattersService.findOne(id);
    }
    update(id, updateMatterDto) {
        return this.mattersService.update(id, updateMatterDto);
    }
    remove(id) {
        return this.mattersService.remove(id);
    }
};
exports.MattersController = MattersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new matter' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Matter created successfully' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_matter_dto_1.CreateMatterDto]),
    __metadata("design:returntype", void 0)
], MattersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all matters' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Matters retrieved successfully' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MattersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get matter statistics' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statistics retrieved successfully' }),
    (0, common_1.Get)('statistics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MattersController.prototype, "getStatistics", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get matters by client' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Client matters retrieved successfully' }),
    (0, common_1.Get)('client/:clientName'),
    __param(0, (0, common_1.Param)('clientName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MattersController.prototype, "findByClient", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get matters by status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Status matters retrieved successfully' }),
    (0, common_1.Get)('status/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MattersController.prototype, "findByStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get matter by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Matter retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Matter not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MattersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update matter' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Matter updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Matter not found' }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_matter_dto_1.UpdateMatterDto]),
    __metadata("design:returntype", void 0)
], MattersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete matter' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Matter deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Matter not found' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MattersController.prototype, "remove", null);
exports.MattersController = MattersController = __decorate([
    (0, swagger_1.ApiTags)('Legal Matters'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('matters'),
    __metadata("design:paramtypes", [matters_service_1.MattersService])
], MattersController);
//# sourceMappingURL=matters.controller.js.map