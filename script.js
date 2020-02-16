function akan(){
var year= document.getElementById("Year").value;
var Y = parseInt(year);
var CC = (Y - 1) / 100 + 1;
var month = document.getElementById("Month").value;
var M =parseInt(month);
var day = document.getElementById("Day").value;
var D = parseInt(day);
var dayOfTheWeek = parseInt( ( (CC/4) -2*CC-1) + ((5*Y/4) ) + ((26*(M+1)/10)) + D )%7;

var dayOfTheWeek = Math.ceil(dayOfTheWeek);

var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adowa","Abena","Akua","Yaa","Afua","Ama"];

if (document.getElementById("gender").checked ){
    var gender = "male";
}
else{
    var gender = "female";
}

console.log(M)
console.log(D)
console.log(Y)


if (M < 1 || M > 12 || M === 2 && D > 29){
    alert("Please enter an actual month.");
}
else if(Y <= 1899 || Y >= 2020){

    alert("Please enter an actual year.");
}
 else if (dayOfTheWeek== 1 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + maleNames[1] + "because you were born on Monday";
}
  if (dayOfTheWeek == 2 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + maleNames[2] + "because you were born on Tuesday";
}
else if (dayOfTheWeek== 3 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + maleNames[3] + "because you were born on Wednesday";
}
else if (dayOfTheWeek== 4 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + maleNames[4] + "because you were born on Thursday";
}
else if (dayOfTheWeek== 5 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + maleNames[5] + "because you were born on Friday";
}
else if (dayOfTheWeek== 6 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + maleNames[6] + "because you were born on Saturday";
}
else if (dayOfTheWeek== 0 && gender=== "male"){
    document.getElementById("enter").innerHTML ="Your name is" + maleNames[0] + "because you were born on Sunday";
}
else if (dayOfTheWeek== 1 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + femaleNames[1] + "because you were born on Monday";
}
else if (dayOfTheWeek== 2 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + femaleNames[2] + "because you were born on Tuesday";
}
else if (dayOfTheWeek== 3 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + femaleNames[3] + "because you were born on Wednesday";
}
else if (dayOfTheWeek== 4 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + femaleNames[4] + "because you were born on Thursday";
}
else if (dayOfTheWeek== 5 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + femaleNames[5] + "because you were born on Friday";
}
else if (dayOfTheWeek== 6 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + femaleNames[6] + "because you were born on Saturday";
}
else if (dayOfTheWeek== 0 && gender=== "female"){
    document.getElementById("enter").innerHTML ="Your name is" + femaleNames[0] + "because you were born on Sunday";
}
else{
    alert("Enter correct information");
}

}