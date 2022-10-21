// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings = strings.concat(obj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      strings = strings.concat(collectStrings(obj[key]));
    }
  }
  return strings;
}

collectStrings(obj1); // ["foo", "bar", "baz"])
