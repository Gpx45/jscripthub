// default javascript
var myPar = document.getElementsByTagName("p")[5];

// jquery
var myPar2 = $("#content p:last-child")

myPar2.addClass("test");

myPar2.css({position: "relative", color: "red"})
// The following is passing in an object.