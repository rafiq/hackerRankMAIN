function reverseString(s) {

    let result = "";
    try {
        if (typeof s === "string") {
        s = s.split("").reverse().join("")
        }
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log(s)
    }

}
console.log(
    reverseString("1234"),
    reverseString(Number(1234)),
)