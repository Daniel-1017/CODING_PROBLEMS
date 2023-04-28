/* 
Scenario
You're saying good-bye your best friend , See you next happy year .

Happy Year is the year with only distinct digits , (e.g) 2018

Task
Given a year, Find The next happy year or The closest year You'll see your best friend!alt!alt

Notes
Year Of Course always Positive .
Have no fear , It is guaranteed that the answer exists .
It's not necessary that the year passed to the function is Happy one .
Input Year with in range (1000  ≤  y  ≤  9000)
*/

// MY SOLUTION
function nextHappyYear(year) {
  let happyYear;
  while (!happyYear) {
    year++;
    let num = year;
    let visited = new Array(10);

    // Find digits and maintain its hash
    while (num) {
      // if a digit occurs more than 1 time
      // then break
      if (visited[num % 10]) break;

      visited[num % 10] = true;

      num = Math.floor(num / 10);
    }

    // num will be 0 only when above loop
    // doesn't get break that means the
    // number is unique so print it.
    if (num == 0) happyYear = year;
  }
  return year;
}

// SOLUTION OF OTHERS
function nextHappyYear(a) {
  while (new Set([...(++a + "")]).size < 4);
  return a;
}
