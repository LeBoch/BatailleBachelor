import { Deck } from "./Deck";
import { Card } from "./card";
import { Player } from "./player";

let card: Card | undefined
const play1 = new Player('Kaaris1');
const play2 = new Player('Booba2');

const deck = new Deck();
deck.shuffle()

const deck_size: number = deck.getDeckSize();

for (let i = 0; i < deck_size; i++) {
    card = deck.draw()
    if (card != undefined) {
        if (i % 2 == 0) {
            play1.addCard(card)
        } else {
            play2.addCard(card)
        }
    }
}

let compt = 0;
while (play1.getNBCard() > 0 && play2.getNBCard() > 0) {
    compt = compt + 1
    let card1 = play1.distributeCard();
    let card2 = play2.distributeCard();
    if (card1 !== undefined && card2 !== undefined) {
        console.log("Round :" + compt + " " + play1.getName() + " Nombre Cart " + play1.getNBCard()+ " " + play2.getName() + " Nombre Cart " + play2.getNBCard())
        if (card1.getValeur() == card2.getValeur()) {
            console.log("-----BATTTAIIIIIIIILLLLLLLLLEEEEEEEE-----")
            console.log("Le joueur " + play1.getName() + " Avec la carte suivante " + card1.getValeur());
            console.log("Le joueur " + play2.getName() + " Avec la carte suivante " + card2.getValeur());

            let card3 = play1.distributeCard();
            let card4 = play2.distributeCard();
            let card5 = play1.distributeCard();
            let card6 = play2.distributeCard();
            if (card4 != undefined && card3 != undefined && card5 != undefined && card6 != undefined) {
                let listCart: Card[] = [card1, card2, card2, card4, card6, card5]
                if (card5.getValeur() > card6.getValeur()) {
                    play1.addCards(listCart);
                    console.log("JOUEUUUR 1 A WIIIINNNN")
                    console.log("WIN :" + play1.getName() + " Avec la carte suivante " + card5.getValeur());
                    console.log("LOOSE :" + play2.getName() + " Avec la carte suivante " + card6.getValeur());
                    console.log("------------------------------------------------------------------------------------------------------------------------------------");
                } else {
                    play2.addCards(listCart);
                    console.log("JOUEUUUR 2 A WIIIINNNN")
                    console.log("WIN :" + play1.getName() + " Avec la carte suivante " + card5.getValeur());
                    console.log("LOOSE : " + play2.getName() + " Avec la carte suivante " + card6.getValeur());
                    console.log("------------------------------------------------------------------------------------------------------------------------------------");
                }
            }
        }
        else if (card1.getValeur() > card2.getValeur()) {
            console.log("JOUEUUUR 1 A WIIIINNNN")
            console.log("WIN : " + play1.getName() + " Avec la carte suivante " + card1.getValeur() + " Carte restante ");
            console.log("LOOSE : " + play2.getName() + " Avec la carte suivante " + card2.getValeur() + " Carte restante ");
            console.log("------------------------------------------------------------------------------------------------------------------------------------");
            play1.addCard(card2);
            play1.addCard(card1);

        } else {
            console.log("JOUEUUUR 2 A WIIIINNNN")
            console.log("Le joueur " + play2.getName() + " Avec la carte suivante " + card2.getValeur() + " Carte restante : " + play2.getNBCard() + " a gagné");
            console.log("Le joueur " + play1.getName() + " Avec la carte suivante " + card1.getValeur() + " Carte restante " + play1.getNBCard() + " a perdu");
            console.log("------------------------------------------------------------------------------------------------------------------------------------");
            play2.addCard(card1);
            play2.addCard(card2);
        }
    }
}