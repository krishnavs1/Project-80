function getpara1()
{
    getparagraph1_array = [];
for (var index = 1; index <= 6; index++) {
    var para1=document.getElementById("1para_"+index).value;
    getparagraph1_array.push(para1);
}
document.getElementById("showParagraph1").innerHTML=getparagraph1_array.join(". ")
}
function getpara2()
{
    getparagraph2_array = [];
for (var index = 1; index <= 6; index++) {
    var para2=document.getElementById("2para_"+index).value;
    getparagraph2_array.push(para2);
}
document.getElementById("showParagraph2").innerHTML=getparagraph2_array.join(". ")
}