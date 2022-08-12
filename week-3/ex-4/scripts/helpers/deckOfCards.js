let cardsInDeck = [];

const deckOfCards = (position) => {

    while (cardsInDeck.length < 90) {

        for (let i = 0; i < cardsGenerator().length; i++) {
            const element = cardsGenerator()[i];
            cardsInDeck.splice(position, 0, element);
        }
    }
    
    return cardsInDeck;
}