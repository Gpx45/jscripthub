

var mybody = document.getElementsByTagName("body"); 
var arrTag = mybody[0].getElementsByTagName("a");

for(i = 0; i < arrTag.length; i++)
{
    arrTag[i].setAttribute('href', 'google.com');
}

// Here I modified all a tags with in the body tag and set them to go to google.com


