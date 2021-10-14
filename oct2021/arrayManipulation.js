/**
 *
 * @param {iter} n
 * @param {*} queries
 * @returns
 * iterate throuh queries
 * for loop with i over the result array and query[0] to query[1] and add query[10] to each
 * after iteration return the max integer
 */

function arrayManipulation(n, queries) {

    let result = Array(10).fill(0);

    queries.forEach(el => {
        for (let i = el[0] - 1; i < el[1] ; i++) {
            result[i] += el[2];
            console.log(result);
        }
    })


    return Math.max(...result);

}
console.log(
    // arrayManipulation(10,[ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]),//200
    // arrayManipulation(10,[ [ 1, 5, 3 ], [ 4, 8, 7 ], [ 6, 9, 1 ] ]),//10
    // arrayManipulation(10,[ [ 2, 6, 8 ], [ 3, 5, 7 ], [ 1, 8, 1 ], [ 5, 9, 15 ] ]),//31
    arrayManipulation(40,3
        [29,40,787],
        [9,26,219],
        [21, 31 ,214],
[        8, 22 ,719],
        [15 ,23, 102],
        [11, 24 ,83],
        [14, 22 ,321],
        [5, 22, 300],
        [11, 30, 832],
        [5 ,25 ,29],
        [16 ,24 ,577],
        [3 ,10 ,905],
        [15 ,22 ,335],
        [29 ,35, 254],
        [9 ,20, 20],
        [33 ,34, 351],
        [30, 38 ,564],
        [11 ,31, 969],
        [3, 32 ,11],
        [29, 35 ,267],
        [4, 24 ,531],
        [1 ,38, 892],
        [12 ,18, 825],
        [25, 32 ,99],
        [3 ,39, 107],
 [       12 ,37, 131],
        [3, 26, 640],
        [8 ,39 ,483],
        [8, 11, 194],
        [12, 37, 502])
)