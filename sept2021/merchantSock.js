function sockMerchant(n, ar) {

    // for (let i = 0; i < ar.length; i++) {

    // }
    let result = 0;
    let hash = ar.reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc
    },{})


    Object.keys(hash).forEach(el => {
        if (hash[el] >= 2) {
            result += Math.floor(hash[el] / 2  )
        }
    })
    return result
}

console.log(
    sockMerchant(7,[1,2,1,2,1,3,2]),//2
    sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]),//3
)