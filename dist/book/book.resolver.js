"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const book_schema_1 = require("./book.schema");
let BookResolver = class BookResolver {
    getAllBooks() {
        const arr = [
            { id: 1, title: 'Harry Potter', price: 499 },
            { id: 2, title: 'Stranger Thing', price: 699 },
            { id: 3, title: 'Robin Hood', price: 299 },
        ];
        return arr;
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => [book_schema_1.Book], { name: 'books' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "getAllBooks", null);
BookResolver = __decorate([
    (0, graphql_1.Resolver)((of) => book_schema_1.Book)
], BookResolver);
exports.BookResolver = BookResolver;
//# sourceMappingURL=book.resolver.js.map