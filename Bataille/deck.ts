import { Symbol } from "./Enum/Symbol";
import { Value } from "./Enum/Value";
import { Card } from "./card";
import { Displayable } from "./displayable";

function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
    return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
}

export class Deck implements Displayable {

    protected cards: Card[] = []

    constructor() {
        for (let keySymbol of enumKeys(Symbol)) {
            for (let keyValue of enumKeys(Value)) {
                this.cards.push(new Card(Value[keyValue], Symbol[keySymbol]))
            }
        }
    }

    display(): string {
        let res = ""
        for (let i = 0; i < this.cards.length; i++) {
            res = res + "\n" + this.cards[i].display()
        }
        return res;
    }

    shuffle() {

        for (let i = 0; i < this.cards.length; i++) {
            const tableauTwo = this.cards.splice(Math.floor(Math.random() * this.cards.length), 1);
            this.cards.push(tableauTwo[0])

            // let cardTree: Card
            // const aleaOne = Math.floor(Math.random() * this.cards.length);
            // const aleaTwo = Math.floor(Math.random() * this.cards.length);
            // cardThree = this.cards[aleaOne];
            // this.cards[aleaOne] = this.cards[aleaTwo];
            // this.cards[aleaTwo] = cardTree;

        }
    }

    getCards(): Card[] {
        return this.cards
    }

    draw(): Card | undefined {
        return this.cards.pop()
    }

    getDeckSize(): number {
        return this.cards.length
    }
}

