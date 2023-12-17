
import { Symbol } from "./Enum/Symbol";
import { Value } from "./Enum/Value";
import { Displayable } from "./displayable";

export class Card implements Displayable{
    protected valeur: Value
    protected type: Symbol
    
    constructor(valeur: Value,type: Symbol){
        this.valeur = valeur;
        this.type = type;
    }

    public display():string{
       return Value[this.valeur] + " of " + this.type;
    }

    public getValeur(){
        return this.valeur
    }
    

}