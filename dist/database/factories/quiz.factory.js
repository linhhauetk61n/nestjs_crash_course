"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const falso_1 = require("@ngneat/falso");
const quiz_entity_1 = require("../../modules/quiz/entities/quiz.entity");
const typeorm_seeding_1 = require("typeorm-seeding");
(0, typeorm_seeding_1.define)(quiz_entity_1.QuizEntity, () => {
    console.log('\n **************Factoring');
    try {
        const quiz = new quiz_entity_1.QuizEntity();
        quiz.title = (0, falso_1.randPersonTitle)();
        quiz.description = (0, falso_1.randProductDescription)();
        console.log('\n ***', quiz);
        return quiz;
    }
    catch (error) {
        console.log('\n Errors:', error);
    }
});
//# sourceMappingURL=quiz.factory.js.map