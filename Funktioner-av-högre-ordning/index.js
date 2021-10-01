function f(n) {
    return n > 2
  }
  
  function find(a, g) {
    for (let i = 0; i < a.length; i++) {
        if(g(a[i])) return a[i]        
    }
  }