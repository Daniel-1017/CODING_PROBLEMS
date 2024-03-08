/*
    An array is defined to be inertialif the following conditions hold:

    a. it contains at least one odd value  
    b. the maximum value in the array is even 
    c. every odd value is greater than every even value that is not the maximum value.
    eg:-

    So [11, 4, 20, 9, 2, 8] is inertial because 
    a. it contains at least one odd value [11,9] 
    b. the maximum value in the array is 20 which is even 
    c. the two odd values (11 and 9) are greater than all the even values that are not equal to 20 (the maximum), i.e., [4, 2, 8]
    Write a function called is_inertial that accepts an integer array and returns true if the array is inertial; otherwise it returns false.

  function name:- isInertial
  input:- integer array
  output:- true if array is inertial false otherwise.
*/
const isInertial = intArr => {
    const containsOdd = intArr.some(n => n % 2);

    if (!containsOdd) return false;

    const maxInt = Math.max(...intArr);
    const maxIntIsEven = !(maxInt % 2);

    if (!maxIntIsEven) return false;

    const evenInts = intArr.filter(n => !(n % 2) && n != maxInt);
    
    for (const oddInt of intArr.filter(n => n % 2)) {
        const allOddIntsAreGreater = evenInts.every(evenInt => oddInt > evenInt);
        if (!allOddIntsAreGreater) return false;
    }

    return intArr.length ? true : false;
}
