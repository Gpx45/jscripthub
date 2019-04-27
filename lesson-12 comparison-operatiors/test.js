
// Comperason Operators.

var x = 5;

x > 4;

x > 5;

x >= 5;

x < 5;

x <= 5;

x == 5;
// the operation above compares, if the value is the same.

var x = "5";
x = 5;
// The above statement would evaluate to true, because the string value and the 
// numeric value are the same. 

var x = 5;
x === 5;

// The operation above is comparing BOTH value AND type.
// In this case it would return true.

var x = "5";
x === 5;
// The above operation would return false.

// Negation Operator
x != 4;
// The above operation would be true.

x != 5;
// The above operation would return false

x !== 5;
// The above operation would be false

var x = "5";

x !== 5;
// The operation above would output a true value because even if the value is 5.
// the type is not. Since the condition is testing for whether is NOT the same in 
// this case is true.