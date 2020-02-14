function akan(){
var CC = (Y - 1) / 100 + 1;
var Y = document.getElementById("Year").value;
var M = document.getElementById("Month").value;
var D = document.getElementById("Day").value;
var dayOfTheWeek  = ( ( (CC/4) -2*CC-1) + ((5*Y/4) ) + ((26*(M+1)/10)) + D )%7;

var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female = ["Akosua","Adowa","Abena","Akua","Yaa","Afua","Ama"];

if (document.getElementById("gender").checked ){
    var gender = "male";
}
else{
    var gender = "female";
}
}
if (M < 1 || M > 12 || M === 2 && D > 29){
    alert("Please enter an actual month.");
}
else if (Y <= 1899 || Y >= 2020){
    alert("Please enter an actual year.");
}
if (Math.floor(dayOfTheWeek)== 1 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + male[1] + "because you were born on Monday";
}
else if (Math.floor(dayOfTheWeek)== 2 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + male[2] + "because you were born on Tuesday";
}
else if (Math.floor(dayOfTheWeek)== 3 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + male[3] + "because you were born on Wednesday";
}
else if (Math.floor(dayOfTheWeek)== 4 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + male[4] + "because you were born on Thursday";
}
else if (Math.floor(dayOfTheWeek)== 5 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + male[5] + "because you were born on Friday";
}
else if (Math.floor(dayOfTheWeek)== 6 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + male[6] + "because you were born on Saturday";
}
else if (Math.floor(dayOfTheWeek)== 0 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + male[0] + "because you were born on Sunday";
}
else if (Math.floor(dayOfTheWeek)== 1 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + female[1] + "because you were born on Monday";
}
else if (Math.floor(dayOfTheWeek)== 2 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + female[2] + "because you were born on Tuesday";
}
else if (Math.floor(dayOfTheWeek)== 3 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + female[3] + "because you were born on Wednesday";
}
else if (Math.floor(dayOfTheWeek)== 4 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + female[4] + "because you were born on Thursday";
}
else if (Math.floor(dayOfTheWeek)== 5 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + female[5] + "because you were born on Friday";
}
else if (Math.floor(dayOfTheWeek)== 6 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + female[6] + "because you were born on Saturday";
}
else if (Math.floor(dayOfTheWeek)== 0 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + female[0] + "because you were born on Sunday";
}
