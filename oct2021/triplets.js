function solve(d) {
    let count = 0;
    let set = new Set()
    let hasAllElems = true;

    for (let i = 0; i < arr1.length; i++){
        if (arr2.indexOf(arr1[i]) === -1) {
            hasAllElems = false;
            break;
        }
    }

    // let hash = {};
// https://www.hackerrank.com/challenges/triplets/problem
    for (let i = 0; i < d.length; i++) {
        // set a variable here that finds the next number
        // let
        for (let j = i + 1; j < d.length; j++) {
            for (let k = j + 1;  k < d.length; k++) {

                if (d[i] < d[j] ) {
                    if (d[j] < d[k]) {
                        let current = [d[i],d[j],d[k]];

                        if (set.has(current)) continue;
                        set.add(current)
                        count++
                    }
                }
            }
        }
    }
    console.log(set)
    return count;

}

console.log(
    solve([1, 1, 2, 2, 3 ,4])
)