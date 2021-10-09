function rotLeft(a, d) {
    // var b = a.splice(0, d); a = a.concat(b);
    return [...a.slice(d),...a.slice(0,d)]
    const createArray = (num) => {
        let result = [];

        for (let i = 1; i <= num; i++) {
            result.push(i)
        }
        return result
    }
    let newArray = createArray(a);

    while (d) {
        newArray = newArray.slice(1).concat(newArray.slice(0,1));
        d--;
    }
    console.log( newArray.join(" "))
}
// function createArray(num) {
//     let result = [];

//     for (let i = 1; i <= num; i++) {
//         result.push(i)
//     }
//     return result
// }
console.log(
    rotLeft(5 ,4
     )
)