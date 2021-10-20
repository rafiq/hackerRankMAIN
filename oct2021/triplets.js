function solve(d) {
    let count = 0;
    let set = new Set()

    for (let i = 0; i < d.length; i++) {

        for (let j = i + 1; j < d.length; j++) {
            for (let k = j + 1;  k < d.length; k++) {

                if (d[i] < d[j] && d[i] !== d[j]) {
                    if (d[j] < d[k] && d[j] !== d[k]) {
                        let current = String(d[i]) + String(d[j]) + String(d[k]);
                        if (set.has(current)) continue;
                        set.add(current)
                        count++
                    }
                }
            }
        }
    }
    return count;

}

console.log(
    solve([1, 1, 2, 2, 3 ,4])
)