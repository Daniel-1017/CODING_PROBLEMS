/* 
There is a sentence which has a mistake in its ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering

Examples
>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'
*/

function reOrdering(text) {
  const capital = text
    .split(" ")
    .filter(word => word[0] === word[0].toUpperCase())[0];
  if (text.indexOf(" ") === -1) return capital;
  return (
    capital + " " + text.split(" ").filter(word => word !== capital).join` `
  );
}
