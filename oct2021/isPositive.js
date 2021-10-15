/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {

    // if (a < 0) {
    //     throw  Error("Zero Error")
    // } else if (a > 0) {
    //     return "YES";
    // } else {
    //     throw Error("Negative Error")
    // }
    // return a;

    if (a > 0) return "YES";
    else {
        throw (a === 0 ? new Error("Zero Error") : new Error("Negative Error"));
    }
}
console.log(
    isPositive(2),//
    isPositive(-1),//
    isPositive(0),//
)