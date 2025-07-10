"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const seed_1 = require("./seeds/seed");
const user_entity_1 = require("../modules/users/entities/user.entity");
const matter_entity_1 = require("../modules/matters/entities/matter.entity");
const contract_entity_1 = require("../modules/contracts/entities/contract.entity");
const dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USERNAME || 'counselflow',
    password: process.env.DATABASE_PASSWORD || 'secure_password_123',
    database: process.env.DATABASE_NAME || 'counselflow_ultimate',
    entities: [user_entity_1.User, matter_entity_1.Matter, contract_entity_1.Contract],
    synchronize: true,
    logging: false,
});
async function runSeed() {
    try {
        console.log('📦 Connecting to database...');
        await dataSource.initialize();
        console.log('✅ Database connected successfully');
        await (0, seed_1.seedDatabase)(dataSource);
        await dataSource.destroy();
        console.log('👋 Database connection closed');
    }
    catch (error) {
        console.error('❌ Error during seeding:', error);
        process.exit(1);
    }
}
runSeed();
//# sourceMappingURL=run-seed.js.map