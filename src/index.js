module.exports = function reverse(n) {
    var intString;
    if (n < 0) {
        intString = String(n).substring(1)
    } else { intString = String(n) }
    let intArray = intString.split("")
    let reverseArray = intArray.reverse()
    let reverseString = reverseArray.join("")
    return Number(reverseString)
}
