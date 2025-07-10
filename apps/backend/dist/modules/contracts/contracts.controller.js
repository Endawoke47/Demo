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
exports.ContractsController = void 0;
const common_1 = require("@nestjs/common");
const contracts_service_1 = require("./contracts.service");
const create_contract_dto_1 = require("./dto/create-contract.dto");
const update_contract_dto_1 = require("./dto/update-contract.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let ContractsController = class ContractsController {
    constructor(contractsService) {
        this.contractsService = contractsService;
    }
    async create(createContractDto) {
        try {
            return await this.contractsService.create(createContractDto);
        }
        catch (error) {
            throw new common_1.HttpException('Failed to create contract: ' + error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll(status, type) {
        try {
            if (status) {
                return await this.contractsService.findByStatus(status);
            }
            if (type) {
                return await this.contractsService.findByType(type);
            }
            return await this.contractsService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch contracts: ' + error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getStatistics() {
        try {
            return await this.contractsService.getStatistics();
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch statistics: ' + error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findExpiringSoon(days) {
        try {
            const daysNumber = days ? parseInt(days, 10) : 30;
            return await this.contractsService.findExpiringSoon(daysNumber);
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch expiring contracts: ' + error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        return this.contractsService.findOne(id);
    }
    async update(id, updateContractDto) {
        return this.contractsService.update(id, updateContractDto);
    }
    async remove(id) {
        await this.contractsService.remove(id);
        return { message: 'Contract deleted successfully' };
    }
    async findByMatter(matterId) {
        return this.contractsService.findByMatter(matterId);
    }
};
exports.ContractsController = ContractsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new contract' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Contract created successfully' }),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contract_dto_1.CreateContractDto]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all contracts' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all contracts' }),
    __param(0, (0, common_1.Query)('status')),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('statistics'),
    (0, swagger_1.ApiOperation)({ summary: 'Get contract statistics' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Contract statistics' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "getStatistics", null);
__decorate([
    (0, common_1.Get)('expiring'),
    (0, swagger_1.ApiOperation)({ summary: 'Get contracts expiring soon' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of expiring contracts' }),
    __param(0, (0, common_1.Query)('days')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "findExpiringSoon", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a contract by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Contract details' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a contract' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Contract updated successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contract_dto_1.UpdateContractDto]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a contract' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Contract deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('matter/:matterId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get contracts by matter ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of contracts for the matter' }),
    __param(0, (0, common_1.Param)('matterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "findByMatter", null);
exports.ContractsController = ContractsController = __decorate([
    (0, swagger_1.ApiTags)('contracts'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('contracts'),
    __metadata("design:paramtypes", [contracts_service_1.ContractsService])
], ContractsController);
//# sourceMappingURL=contracts.controller.js.map