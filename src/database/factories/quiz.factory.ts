import { randPersonTitle, randProductDescription } from '@ngneat/falso';
import { QuizEntity } from '../../modules/quiz/entities/quiz.entity';
import { define } from 'typeorm-seeding';

define(QuizEntity, () => {
  console.log('\n **************Factoring');
  try {
    const quiz = new QuizEntity();
    quiz.title = randPersonTitle();
    quiz.description = randProductDescription();
    console.log('\n ***', quiz);
    return quiz;
  } catch (error) {
    console.log('\n Errors:', error);
  }
});
