function rightPoint(n) {
    var msg = "";
    if (isDivisibleBy(n, 3) || contains(n, 3))
        msg += "Right";
    if (isDivisibleBy(n, 5) || contains(n, 5))
        msg += "Point";
    return msg || n;
}

function isDivisibleBy(n, divisor) {
    return n % divisor === 0;
}

function contains(n, num) {
    var numToString = n.toString();
    if (numToString.indexOf(num) != -1) {
        return true;
    }
}

for (var i = 1; i <= 100; i++) {
    console.log(rightPoint(i));
}