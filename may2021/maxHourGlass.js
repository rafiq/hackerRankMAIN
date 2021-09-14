function hourglassSum(arr) {

    // let sum = 0;
    // let max = 0;

    // for (let row = 0; row < arr.length - 2; row++) {
    //     for (let j = 0; j < arr[row].length - 2; j++) {
    //         let sum = arr[row + 1][j + 1];
    //         for (let k = 0; k < 3; k++) {
    //             sum += arr[row][j + k];
    //             sum += arr[row + 2][j + k]
    //     }

    //     if (max < sum) {
    //         max = sum;
    //     }
    //     sum = 0;
    //     }
    // }

    // return max
    // ! My code below does not work, though I think it looks almost exactly like the code above except instead of using a third for loop I manually did those calculations. I still can't see where these two codes differ.
    let sum = -63;
    let max = 0;

    for (let row = 0; row < arr.length - 2; row++) {
        for (let j = 0; j < arr[row].length - 2; j++) {
            sum += arr[j][j + 0] + arr[j][j + 1] + arr[j][j + 2] + arr[j + 1][j + 1] +
            arr[row + 2][j + 0] + arr[row + 2][j + 1] + arr[row + 2][j + 2]
            console.log(sum)
        }
        if (max < sum) {
            max = sum;
        }
        sum = 0;
    }

    return max;

}

console.log(
    hourglassSum([[1, 1, 1 ,0, 0 ,0],
        [0, 1, 0, 0, 0 ,0],
        [1 ,1 ,1 ,0 ,0 ,0],
        [0 ,0 ,2 ,4,4, 0],
        [0 ,0, 0, 2 ,0, 0],
        [0, 0 ,1, 2 ,4 ,0]])
)