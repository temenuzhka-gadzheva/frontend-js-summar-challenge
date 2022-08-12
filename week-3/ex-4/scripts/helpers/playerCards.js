const playerCards = () => {

    let playerDeckCards = [];

    let playerChoice = prompt("Моля въведете позициите на 4 броя карти, с които ще играете, като ги разделете със запетая");

    for (const key in cardsGenerator()) {
        if (Object.hasOwnProperty.call(cardsGenerator(), key)) {
            const element = cardsGenerator()[key];
            for (let i = 0; i < playerChoice.length; i++) {
                const currentCard = playerChoice[i];
                if (currentCard === ",") continue;

                if (element.number == currentCard) {
                    playerDeckCards.push(element);
                    break;
                }

            }

        }
    }

    console.log("That`s your cards!");
    playerDeckCards.forEach(element => {
        console.log(`${element.name} -- ${element.value}`);
    });
    return { playerDeckCards, playerChoice };

};