function getAverage(a,b)
{
    var average = (a + b) / 2;  // This is a local var.
    console.log(average);
    return average;
}

var a = 7;
var b = 12;
var myResult = getAverage(a,b); // This is a Global var

function logResult()
{
    console.log("The average is: " + myResult);
}

logResult();