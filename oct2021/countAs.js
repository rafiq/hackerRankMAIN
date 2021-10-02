function repeatedString(s, n) {
    // let repeatNum = Math.ceil(n / s.length);
    // let count = 0;
    // let stringHaystack = s.repeat(repeatNum);

    // for (let i = 0; i < n; i++) {
    //     console.log(i)
    //     if (stringHaystack[i] === "a") count++;
    // }
    // return count;
    // return n
    let fracNumber = Math.trunc(n / s.length);
    let reminder = n % s.length;
    let counter = 0;

    for (let index = 0; index < s.length; index++) {
        if (s[index] === 'a') {
            counter++;
        }
    }
    counter = counter * fracNumber;
    for (let index = 0; index < reminder; index++) {
        if (s[index] === 'a') {
            counter++;
        }
    }
    return counter;
}
console.log(
    // repeatedString("aba",10),
    repeatedString("a",1000000000000),//
)