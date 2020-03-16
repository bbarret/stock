import { Lieu } from "./lieu.model";
import { Quantite } from "./quantite.model";

export class Article {
    _id:string;
    id:string;
    dateAjout:string;
    dateLimite:string;
    nom:string;
    lieu:Lieu;
    unites:number;
    quantiteUnitaire:Quantite;
}