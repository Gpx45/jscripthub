
var myCar = {
                maxSpeed: 100, 
                driver: "Bob",
                drive: function(speed, time) 
                { 
                    console.log(speed * time);
                },
                test: function()
                {
                    console.log(this);
                }
            };

var myCar2 = {
                maxSpeed: 100, 
                driver: "Steven",
                drive: function(speed, time) 
                { 
                    console.log(speed * time);
                },
                logDriver: function()
                {
                    console.log("driver name is" + this.driver);
                }
            };

myCar.logDriver();
myCar2.logDriver();


