module.exports = function reverse(n) {
    n = Math.abs(n);
    let str = String(n);
    let res = "";

    for (i = str.length - 1; i >= 0; i--) {
        if (n[n.length - 1] !== 0) {
            res = res + str[i];
        }
    }
    return res;
};
