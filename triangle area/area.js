function area(){
    var fs=document.getElementById("side1").value;
var ss=document.getElementById("side2").value;
var ts=document.getElementById("side3").value;
var s =(Number(fs)+ Number(ss)+ Number(ts))/2;
var area = Math.sqrt(s*((s-fs)*(s-ss)*(s-ts)));
document.getElementById("Area").innerText=area;
}