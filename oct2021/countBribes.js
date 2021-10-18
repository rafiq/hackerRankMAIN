function minimumBribes(q) {
    // let count = 0;

    // for (let i = 0; i < q.length; i++) {
    //     if (q[i] - (i + 1) > 2) console.log( "Too chaotic")

    //     if (q[i] > (i + 1)) {
    //         count += q[i] - (i + 1);
    //     }
    // }

    // console.log( count)
    let bribeCount = []
    let high = 0;

    for (let i = 0; i < q.length; i++) {
        let val = q[i]
        bribeCount[val] = 0
        high = Math.max(val, high)

        if (val < high) {
            for (let j=val+1; j < bribeCount.length; j++) {
                bribeCount[j]++
                if (bribeCount[j] > 2) {
                    console.log("Too chaotic")
                    return;
                }
            }
        }
    }
    const sum = bribeCount.reduce((a,b) => a + b, 0)  // sum
    console.log(sum);

}
console.log(
    minimumBribes([4,1,2,3]) ,//too Chaotic
    minimumBribes([1,2,3,5,4,6,7,8]),//1
    minimumBribes([2, 1, 5, 3, 4]),//3
    minimumBribes([2, 5, 1, 3, 4]),//\too chaotic
    minimumBribes([5 ,1 ,2 ,3 ,7, 8 ,6 ,4
]        ),//\too chaotic
)