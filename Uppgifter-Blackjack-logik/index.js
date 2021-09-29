shuffle = (cards) => {
    let n = cards.length, t, i
    while (n) {
        i = Math.floor(Math.random() * n--);
        t = cards[n];
        cards[n] = cards[i];
        cards[i] = t;
    }
}