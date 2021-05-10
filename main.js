function submit()
{
    var input=[];
    for(var v=1;v<=4;v++)
    {
        input.push(document.getElementById("student_"+v).value);
    }
    document.getElementById("p1").innerHTML=input.join(".");
}

function submit2()
{
    var input=[];
    for(var j=5;j<=8;j++)
    {
        input.push(document.getElementById("student_"+j).value);
    }
    document.getElementById("p2").innerHTML=input.join(".");
}