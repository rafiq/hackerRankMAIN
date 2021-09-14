function isPaliPermutation(str1) {
    let mapping = str1.replace(/[^a-z]/gi,"").split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{});
    let str2Array = Object.values(str1.replace(/[^a-z]/gi,"").split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{}))

    return mapping
}
console.log(
    isPaliPermutation("tact coa")
)