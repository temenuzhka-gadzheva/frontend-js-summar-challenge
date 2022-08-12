const casinoDeckCards = () => {

    let allCards = deckOfCards(randomCardPositionGenerator());
    let playerCardsIndexes = playerCards().playerDeckCards;

    for (let i = 0; i < playerCardsIndexes.length; i++) {
        const currentPlayerCard = playerCardsIndexes[i];
        if (currentPlayerCard === ",") continue;

        for (let j = 0; j < allCards.length; j++) {
            const currentCardFromAll = allCards[j];
            if (currentCardFromAll.name === currentPlayerCard.name) {
                allCards.splice(j, 1);
                break;
            }
        }

    }

    allCards.forEach(element => {
        console.log("Casino cards : " + element.name);
    });
    return allCards;
};