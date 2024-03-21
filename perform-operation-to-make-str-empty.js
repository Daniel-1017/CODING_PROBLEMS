/* 
You are given a string "strng"

Perform the following operation until "strng" becomes empty:

For every alphabet character from 'a' to 'z', remove the first occurrence of that character in "strng" (if it exists).
Example, let initially strng = "aabcbbca". We do the following operations:

Remove the underlined characters strng = "(a)a(b)(c)bbca". The resulting string is strng = "abbca".

Remove the underlined characters strng = "(a)(b)b(c)a". The resulting string is strng = "ba".

Remove the underlined characters strng = "(b)(a)". The resulting string is strng = "".

Return the value of the string strng right before applying the last operation. In the example above, answer is "ba".
You can assume on next:

strng will never be empty

strng.length <= 5 * 10**5

strng will contains only of lowercase English letters.
*/

// MY SOLUTION
const lastNonEmptyString = ([...str]) => {
    const last = str.join``, letters = [...new Set(str)];

    for (const letter of letters) {
        const idx = str.indexOf(letter);
        if (idx === -1) continue;
        str.splice(idx, 1);
    }

    if (!str.length) return last;

    return lastNonEmptyString(str);
}

// OTHERS SOLUTION
const lastNonEmptyString = (s) => {
    let cnt = new Array(26).fill(0);
    let last = new Array(26).fill(0);
    let n = s.length;
    let mx = 0;
    for (let i = 0; i < n; ++i) {
        let c = s.charCodeAt(i) - 'a'.charCodeAt(0);
        mx = Math.max(mx, ++cnt[c]);
        last[c] = i;
    }
    let ans = '';
    for (let i = 0; i < n; ++i) {
        let c = s.charCodeAt(i) - 'a'.charCodeAt(0);
        if (cnt[c] === mx && last[c] === i) {
            ans += s[i];
        }
    }
    return ans;
}