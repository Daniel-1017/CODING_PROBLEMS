/* 
Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you shoud return:

["-------------", "Unicorn"]
*/

function bald(x) {
  const noHair = x.match(/-/g).join``;
  const hairDifference = x.length - noHair.length;

  const result = [x.replaceAll("/", "-")];
  if (hairDifference === 0) result[1] = "Clean!";
  if (hairDifference === 1) result[1] = "Unicorn!";
  if (hairDifference === 2) result[1] = "Homer!";
  if (hairDifference <= 5 && hairDifference >= 3) result[1] = "Careless!";
  if (hairDifference > 5) result[1] = "Hobo!";

  return result;
}
