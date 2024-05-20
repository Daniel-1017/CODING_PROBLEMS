/* 
Declare an variable which name is stone that cant't be modified.

The initial value of stone is under below.

{
  feature: 'earth',
  style: {
    color: 'black'
  }
}
*/

const stone = {
  feature: "earth",
  style: {
    color: "black",
  },
};

function deepFreeze(obj) {
  const propNames = Object.getOwnPropertyNames(obj);

  for (const name of propNames) {
    const value = obj[name];

    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
}

deepFreeze(stone);
