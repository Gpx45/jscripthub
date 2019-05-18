
var myForm = document.forms.myForm;
var myMessage = document.getElementById("message");

myForm.onsubmit = function(){
    if(myForm.name.value == "")
    {
        myMessage.innerHTML = "Please enter a name";
        return false;
    }
    else
    {
        myMessage.innerHTML = "";
        return true;
    }
    
};