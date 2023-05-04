import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';
import { Book as BookDTO } from 'src/graphql';

@Resolver((of) => Book)
export class BookResolver {
  @Query((returns) => [Book], { name: 'books' })
  getAllBooks() {
    const arr: BookDTO[] = [
      { id: 1, title: 'Harry Potter', price: 499 },
      { id: 2, title: 'Stranger Thing', price: 699 },
      { id: 3, title: 'Robin Hood', price: 299 },
    ];
    // Return Books
    return arr;
  }
}
