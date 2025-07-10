"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MattersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const matters_service_1 = require("./matters.service");
const matters_controller_1 = require("./matters.controller");
const matter_entity_1 = require("./entities/matter.entity");
let MattersModule = class MattersModule {
};
exports.MattersModule = MattersModule;
exports.MattersModule = MattersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([matter_entity_1.Matter])],
        providers: [matters_service_1.MattersService],
        controllers: [matters_controller_1.MattersController],
        exports: [matters_service_1.MattersService],
    })
], MattersModule);
//# sourceMappingURL=matters.module.js.map