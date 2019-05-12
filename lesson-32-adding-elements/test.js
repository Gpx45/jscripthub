var newUl = document.createElement("ul");

var newA = document.createElement("a");

var aArr = document.body.getElementsByTagName('a');

document.body.appendChild(newUl);

document.body.insertBefore(newA, aArr[0]);

