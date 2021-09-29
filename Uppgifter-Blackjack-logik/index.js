score = (cards) => {
    let sum = 0
    for (let i = 0; i < cards.length; i++) {
        if(cards[i].value == 1){
            sum += 11
        } else if(cards[i].value >= 10){
            sum += 10
        } else {
            sum += cards[i].value
        }
    }
    return sum
}