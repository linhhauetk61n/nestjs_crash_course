"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizzesCreateSeed = void 0;
const quiz_entity_1 = require("../../modules/quiz/entities/quiz.entity");
class QuizzesCreateSeed {
    async run(factory) {
        console.log('\n *********Seeding');
        await factory(quiz_entity_1.QuizEntity)().create();
    }
}
exports.QuizzesCreateSeed = QuizzesCreateSeed;
//# sourceMappingURL=create-quizzes.seed.js.map