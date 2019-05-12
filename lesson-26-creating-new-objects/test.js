
var arr = new Array();

arr[0] = 8;
arr[1] = "hello";


// Create a Car Object and also use shorthand.

var Car = new Object();
Car.maxSpeed = 50;
Car.driver = "Shaun";
// Above are properties to the Car object.
Car.drive = function() { console.log("Now Driving");};
// The above is how you would create the function Car.drive()

// short hand to create an object.
var myCar = {
                maxSpeed: 100, 
                driver: "Bob",
                drive: function(speed, time) 
                { 
                    console.log(speed * time);
                }
            };

console.log(myCar.maxSpeed);
console.log(myCar.drive(50, 3));


