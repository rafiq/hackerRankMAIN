function checkPermutation(word1, word2) {
    let sorted1 = word1.split("").sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
    let sorted2 = word2.split("").sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");

    return sorted1 === sorted2
}

console.log(
    checkPermutation("abc","cab"),//true;
    checkPermutation("abc","cat"),//true;
)