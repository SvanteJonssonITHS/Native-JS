function reverse(a){
    let reversed = [];
    for (let i = a.length -1; i >= 0; i--) {
        reversed.push(a[i])
    }
    return reversed;
}