// Write your cade below:
var main = function main(number) {
    var result = "";
    if (number == 99) {
        return way(number);
    }

    if (number = 2) {
        return ways(number);
    }
    function way(number1) {
        for (let i = number1; i > 2; i--) {
            result += `${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i - 1} bottles of beer on the wall.
`
        }
        return result;
    }
    function ways(number2) {
        for (let j = number2; j > 1; j--) {
            result = `${j} bottles of beer on the wall, ${j} bottles of beer.
Take one down and pass it around, ${j - 1} bottle of beer on the wall.
${j - 1} bottle of beer on the wall, ${j - 1} bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`
        }
        return result;
    }

};

module.exports = main