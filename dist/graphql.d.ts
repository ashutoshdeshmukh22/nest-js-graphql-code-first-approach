export interface Book {
    id: number;
    title: string;
    price: number;
}
export interface IQuery {
    books(): Book[] | Promise<Book[]>;
}
