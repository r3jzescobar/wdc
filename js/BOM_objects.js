function windowOp(){
var newWindow= window.open("https://www.hackerrank.com/","newWindow","height = 100,width=200");
newWindow.moveTo(150,200);
newWindow.close();

}

function navigatorProp()
{

    document.write(navigator.appCodeName);

}
navigatorProp();

