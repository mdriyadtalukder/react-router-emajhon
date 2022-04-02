const Getstr = id => {
    const a = localStorage.getItem('store');
    let b = {};
    if (a) {
        b = JSON.parse(a)
    }
    const q = b[id];
    if (q) {
        b[id] = b[id] + 1;
    }
    else {
        b[id] = 1
    }
    localStorage.setItem('store', JSON.stringify(b))
}
const gett = id => {
    const a = localStorage.getItem('store');
    let b = {};
    if (a) {
        b = JSON.parse(a)
    }
    return b;
}

const Remov = id => {
    const a = localStorage.getItem('store');
    if (a) {
        const b = JSON.parse(a);
        if (id in b) {
            delete b[id];
            localStorage.setItem('store', JSON.stringify(b));
        }
    }
}
export { Getstr, Remov, gett };