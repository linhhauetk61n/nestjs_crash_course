"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADDUSERROLE1681201879768 = void 0;
class ADDUSERROLE1681201879768 {
    constructor() {
        this.name = 'ADDUSERROLE1681201879768';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'poster')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "role" "public"."users_role_enum" NOT NULL DEFAULT 'poster'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    }
}
exports.ADDUSERROLE1681201879768 = ADDUSERROLE1681201879768;
//# sourceMappingURL=1681201879768-ADD_USER_ROLE.js.map