function paraClicked(){

    document.getElementById("abc").setAttribute("style","color:yellow");
}

function paraMouseOver(){

    document.getElementById("abc").setAttribute("style","color:blue")
}

document.getElementById("abc").addEventListener("click",paraClicked);
document.getElementById("abc").addEventListener("mouseover",paraMouseOver);


function buttonClick(){

    document.getElementById("b").setAttribute("style", "color:blue");
}

function buttonMouseOver(){
    document.getElementById("b").setAttribute("style","color:yellow");
}


function validateForm(){

    var name =document.getElementById("name");
    var phone =document.getElementById("phone");

    if(name.value == ""){
        alert("please enter some value in name")
    }  

    if(!(isNaN(name.value))){
        alert("please enter text value in Name");

    }

    if(isNaN(phone.value)){
        alert("please enter text value in Number");
    }
}