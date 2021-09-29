let suits = {
    'HEARTS': "♥",
    'SPADES': "♠",
    'DIAMONDS': "♦",
    'CLUBS': "♣"
}
let numbers = {
    1: "A",
    10: "T",
    11: "J",
    12: "Q",
    13: "K"
}
prettyCard = (card) => {
    let pretty
    if (numbers.hasOwnProperty(card.value)) {
        pretty = numbers[card.value]
    } else {
        pretty = card.value
    }

    if (suits.hasOwnProperty(card.suit)) {
        pretty += suits[card.suit]
    }
    
    return pretty
}