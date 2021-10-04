function countingValleys(steps, path) {
    let count = 0;
    let altitude = 0;

    for (let i = 0; i < path.length; i++) {
        if (path[i] === "U") altitude++;
        if (path[i] === "D") altitude--;

        if (altitude < 0) {
            if (altitude === -1 && path[i + 1] === "U") {
                count++
            }
        }
    }

    return count;
}

console.log(
    countingValleys(8
        ,"UDDDUDUU"),
        // countingValleys()
)