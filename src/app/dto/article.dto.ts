import { Peremption } from "./peremption";

export class ArticleDto{
    id:string;
    nom:string;
    dateLimite:Date;
    peremption:Peremption
}