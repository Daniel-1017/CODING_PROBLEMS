/* 
We have to create a function that receives a connection string with password included and you have to mask the password i.e. change password by asterisks.

Preconditions:

non empty valid url
password always next to string section password=
assume password will not contain ampersand sign for sake of simplicity
to make it more real it has non ASCII characters
"password=" and "user" will occur only once
empty passwords are not validated but best solutions take empty passwords into account

Example:

input
jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345

output
jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****
*/

function hidePasswordFromConnection(urlString){
  const [url, urlParams] = urlString.split("?")
  const params = urlParams.split("&").map(param => {
    if (param.includes("password")) {
      const [_, password] = param.split("=")
      return `password=${"*".repeat(password.length)}`
    }
    return param
  }).join`&`
  return `${url}?${params}`
}