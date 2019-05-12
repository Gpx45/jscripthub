var myString = 'I am \' a "fun" string';

console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("string"));

if (myString.indexOf("stuff") == -1)
{
    console.log("The word " + myString + " is not in the string.");
}

