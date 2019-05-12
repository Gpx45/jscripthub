// By convention creating constructor functions
// Start with a Capital letter, but it doesn't have to.

var Car = function(maxSpeed, driverName)
{
    this.maxSpeed = maxSpeed;
    this.driverName = driverName;
    this.drive = function(speed, time)
    {
        console.log(speed * time);
    }
    this.logDriver = function()
    {
        console.log("Driver name is " + this.driverName);
    }
}

chevy = new Car(150, "James");

console.log(chevy.logDriver());

