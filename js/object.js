function createPerson(){

    var person = new Object();
    person.name = "reggie";
    person.designation = " IT";
    person.phone= 09178309579;
    return person;
}
createPerson();
var reggie=createPerson();

function createPerson2(){

    var person = {};
    person.name = "reggie";
    person.designation = " IT";
    person.phone= 09178309579;
    return person;
}

reggie = createPerson2();

function createPerson3(){

    var person = {};
    person['name']= "reggie";
    person['designation'] = " IT";
    person['phone']= 09178309579;
    return person;
}
reggie = createPerson3();
alert("name:" +reggie.name + "designation:" + reggie.designation +"phone :" + reggie.phone);

function createPerson4(){

    var  person ={

        name: "reggie4",
        age:60,
        designation: "IT HEad",
        phone: 4544454
    };


}
reggie4=createPerson4();
