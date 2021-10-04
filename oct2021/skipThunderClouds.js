function jumpingOnClouds(c) {

    let count = 0;
    let i = 0;

    while (i < c.length - 1) {
        if (c[i + 2] !== 1) {
            i += 2;
            count++;
        } else if (c[i + 1] === 0 ) {
            i++;
            count++;
        }
    }
    return count;

}
console.log(
    jumpingOnClouds(
       [ 0 ,0, 1, 0, 0 ,1, 0]),//4
    jumpingOnClouds(
        [0, 0 ,0 ,0 ,1 ,0]),//3
)