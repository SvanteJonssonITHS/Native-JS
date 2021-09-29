let deck = []
let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']
for (let i = 0; i < suits.length; i++) {
    for (let j = 1; j < 14; j++) {
        deck.push({suit: suits[i], value: j })
    }
}