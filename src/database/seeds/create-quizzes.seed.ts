import { QuizEntity } from '../../modules/quiz/entities/quiz.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class QuizzesCreateSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    console.log('\n *********Seeding');
    await factory(QuizEntity)().create();
    // await connection
    //   .createQueryBuilder()
    //   .insert()
    //   .into(QuizEntity)
    //   .values([
    //     { title: 'Test', description: 'This is a test description' },
    //     { title: 'Test 1', description: 'This is a test 1 description' },
    //   ])
    //   .execute();
  }
}
