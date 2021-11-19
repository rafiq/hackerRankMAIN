function subsetA(arr) {
    // find minimal size = len / 2 plus one
    // check if repeating numbers
    //  if repeating, then don't use those numbers in A
    let maxLength =   Math.floor(arr.length / 2);
    arr.sort((a,b) => b - a);
    const sumArray = arr => arr.reduce((acc,curr) => acc + curr,0);

    for (let i = 2; i < maxLength; i++) {
        if (sumArray(arr.slice(0,i)) > sumArray(arr.slice(i))) {
            // console.log(sumArray(arr.slice(0,i)),sumArray(arr.slice(i)));
            return arr.slice(0,i);
        }
    }

    return sumArray(arr);
}
console.log(
    subsetA([5,
        3,
        2,
        4,
        1,
        2]),
);