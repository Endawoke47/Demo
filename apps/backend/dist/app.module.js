"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const matters_module_1 = require("./modules/matters/matters.module");
const contracts_module_1 = require("./modules/contracts/contracts.module");
const clients_module_1 = require("./modules/clients/clients.module");
const documents_module_1 = require("./modules/documents/documents.module");
const ai_module_1 = require("./modules/ai/ai.module");
const risks_module_1 = require("./modules/risks/risks.module");
const disputes_module_1 = require("./modules/disputes/disputes.module");
const analytics_module_1 = require("./modules/analytics/analytics.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const entities_module_1 = require("./modules/entities/entities.module");
const database_module_1 = require("./database/database.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env.local', '.env'],
            }),
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: 60000,
                    limit: 100,
                }]),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            matters_module_1.MattersModule,
            contracts_module_1.ContractsModule,
            clients_module_1.ClientsModule,
            documents_module_1.DocumentsModule,
            ai_module_1.AiModule,
            risks_module_1.RisksModule,
            disputes_module_1.DisputesModule,
            analytics_module_1.AnalyticsModule,
            notifications_module_1.NotificationsModule,
            entities_module_1.EntitiesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map