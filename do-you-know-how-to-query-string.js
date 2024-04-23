/* 
Sometimes there are more than one value for property:

{
  "name": "shirt",
  "colors": [ "white", "black" ]
}
Then it represents as repeated param:

name=shirt&colors=white&colors=black
So, your task is to write a function that convert an object to query string:

toQueryString({ foo: 1, bar: [ 2, 3 ] }) // => "foo=1&bar=2&bar=3"

Note: require has been disabled.
*/

// Solution 1
const toQueryString = obj => {
    const params = [];
    for (const key in obj) {
        const val = obj[key];

        if (Array.isArray(val)) params.push(val.map(v => `${key}=${v}`).join`&`);
        else params.push(`${key}=${val}`);
    }

    return params.join`&`;
};

// Solution 2
const toQueryString = obj => Object.keys(obj).map(key => Array.isArray(obj[key]) ?  obj[key].map(v => `${key}=${v}`).join`&` : `${key}=${obj[key]}`).join`&`
