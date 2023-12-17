import { Card } from "./card";
import { Displayable } from "./displayable";

export class Player implements Displayable {
    protected hand: Card[] = []
    protected name: string

    constructor(name: string) {
        this.name = name
    }

    public addCard(c: Card) {
        this.hand.push(c)
    }

    public addCards(c: Card[]) {
        this.hand.push(...c)
    }

    public getNBCard(): number {
        let res = 0;
        for (let i = 0; i < this.hand.length; i++) {
            res = res + 1
        }
        return res
    }

    public display(): string {
        let res = "Mes cartes sont : \n " + `${this.hand.length}\n`
        for (let i = 0; i < this.hand.length; i++) {
            res = res + "\n" + this.hand[i].display()
        }
        return res;
    }

    distributeCard(): Card | undefined {
        return this.hand.shift();
    }

    public getHand() {
        return this.hand
    }

    public getName() {
        return this.name
    }
}



//Creer les deux joueurs et leur distribuer les cartes du deck tour

