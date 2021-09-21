


// let regex =  /\(\+?\-?\d?\d\.?\d+?\,?" "\+?\-?[-180-180]\.\d+?\)?/  // numbers dot space numbers+ parentheses
// SIGN = '[\+-]?'
// DECIMALS = '(\.[0-9]+)?'
// ZEROS = '(\.0+)?'

// LATITUDE =  f'{SIGN}(90{ZEROS}|[1-8]\d{DECIMALS}|\d{DECIMALS})'
// LONGITUDE = f'{SIGN}(180{ZEROS}|1[0-7]\d{DECIMALS}|[1-9]\d{DECIMALS}|\d{DECIMALS})'

// REGEX = f'\({LATITUDE}, {LONGITUDE}\)'
// pattern = re.compile(REGEX)

// def validate(value):
//     return pattern.search(value)

// for _ in range(int(input())):
//     if validate(input()):
//         print('Valid')
//     else:
//         print('Invalid')

let regex = r"^\([+-]?(\d(\.\d+)?|[1-8]\d(\.\d+)?|90(\.0+)?), [+-]?([1-9]?\d(\.\d+)?|1[0-7]\d(\.\d+)?|180(\.0+)?)\)$"


console.log(
    regex.test("(75, 180)"),//valid
)

function processData(input) {
    var input = input.split('\n');
    var n = parseInt(input[0]);
    var pairs = input.slice(1);

    console.log(processPairs(pairs).join('\n'));
}

var validateLonLat = function(pairs) {
    var longLatRE = /^\([+-]?([1-8]?\d(\.\d+)?|90(\.0+)?), [+-]?((1[0-7]|[1-9])?\d(\.\d+)?|180(\.0+)?)\)$/;
    return (longLatRE.test(pairs) ? 'Valid' : 'Invalid');
}

var processPairs = function(input) {
    var validity = [];
    input.forEach(function(pair) {
        validity.push(validateLonLat(pair));
    });
    return validity;
}