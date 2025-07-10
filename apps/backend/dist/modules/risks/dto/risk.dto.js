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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRiskDto = exports.CreateRiskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateRiskDto {
}
exports.CreateRiskDto = CreateRiskDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Data Breach Risk' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRiskDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Potential risk of data breach due to outdated security protocols' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRiskDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cybersecurity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRiskDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'medium', enum: ['low', 'medium', 'high'] }),
    (0, class_validator_1.IsIn)(['low', 'medium', 'high']),
    __metadata("design:type", String)
], CreateRiskDto.prototype, "likelihood", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'high', enum: ['low', 'medium', 'high'] }),
    (0, class_validator_1.IsIn)(['low', 'medium', 'high']),
    __metadata("design:type", String)
], CreateRiskDto.prototype, "impact", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'open', enum: ['open', 'mitigated', 'closed'] }),
    (0, class_validator_1.IsIn)(['open', 'mitigated', 'closed']),
    __metadata("design:type", String)
], CreateRiskDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRiskDto.prototype, "owner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['security', 'data'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateRiskDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/document.pdf', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRiskDto.prototype, "documentUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['matter-1', 'matter-2'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateRiskDto.prototype, "relatedMatters", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRiskDto.prototype, "createdBy", void 0);
class UpdateRiskDto {
}
exports.UpdateRiskDto = UpdateRiskDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Data Breach Risk', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRiskDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Updated description', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRiskDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cybersecurity', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRiskDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'medium', enum: ['low', 'medium', 'high'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['low', 'medium', 'high']),
    __metadata("design:type", String)
], UpdateRiskDto.prototype, "likelihood", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'high', enum: ['low', 'medium', 'high'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['low', 'medium', 'high']),
    __metadata("design:type", String)
], UpdateRiskDto.prototype, "impact", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'closed', enum: ['open', 'mitigated', 'closed'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['open', 'mitigated', 'closed']),
    __metadata("design:type", String)
], UpdateRiskDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Jane Smith', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRiskDto.prototype, "owner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['security', 'updated'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateRiskDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/updated-document.pdf', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRiskDto.prototype, "documentUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['matter-3'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateRiskDto.prototype, "relatedMatters", void 0);
//# sourceMappingURL=risk.dto.js.map