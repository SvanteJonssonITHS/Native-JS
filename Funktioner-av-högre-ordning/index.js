function filter(a, f) {
    let filtered = []
    for (let i = 0; i < a.length; i++) {
        if(f(a[i])) filtered.push(a[i])     
    }
    return filtered
}