var timervar= setInterval(counttimer, 1000);
 
 
var totalseconds= 0;

function counttimer(){

    ++totalseconds;

    var hour= Math.floor(totalseconds/3600);

    var minute= Math.floor((totalseconds - hour*3600)/60);

    var seconds= totalseconds - (hour*3600 + minute*60);

    document.getElementById("timer").innerHTML= hour +"h "+ minute +"m " +seconds +"s ";

}

counttimer();


function visibility(){
    document.getElementById("favourite").style.display = 'none';

}

visibility();


function browser(){


txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
txt+= "<p>Browser Name: " + navigator.appName + "</p>";
txt+= "<p>Browser Version: " + navigator.appVersion + "</p>";

document.getElementById("browser").innerHTML="" +txt;


}


browser();



function checkbox()
{
    var checkboxs=document.getElementsByName("c1");
    var okay=false;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            okay=true;
            break;
        }
    }
    if(okay)alert("Thank you for checking a checkbox");
    else alert("Please check a checkbox");
}

