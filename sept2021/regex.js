function regexVar(word) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    // let re ;

    // let regex = new RegExp(/^[aeiou]?.+?[aeiou]$/)
    // if ( regex.test(word)) {
    //      re = word.match(regex)
    // }
    let re =  /^([aeiou]).*\1$/;
    /*
     * Do not remove the return statement
     */
    return re;
}
console.log(
    regexVar("abcda")
)


const dessert = {type:'pie'};
dessert.type = 'pudding';

const seconds = dessert;
seconds.type = 'fruit';

console.log(seconds)