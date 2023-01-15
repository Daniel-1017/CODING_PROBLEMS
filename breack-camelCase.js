/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/


// MY SOLUTION
function solution(string) {
    let final = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            final += " " + string[i]
        } else {
            final += string[i]
        }
    }
    return final
}

// SOLUTION OF OTHERS
function solution(string) {
    return (string.replace(/([A-Z])/g, ' $1'));
}
