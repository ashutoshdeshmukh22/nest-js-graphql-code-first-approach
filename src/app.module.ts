import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { BookModule } from './book/book.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        // to generate interfaces (DTOs) automatically for validation
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      // typePaths: ['./**/*.graphql'],
    }),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
