const minPosition = 0;
const maxPosition = 89;
let currentRandomCardPosition;

const randomCardPositionGenerator = () => {

    currentRandomCardPosition = Math.floor(Math.random() *
        (maxPosition - minPosition) +
        minPosition);

    return currentRandomCardPosition;
};