// get a reference to the textbox where the bill type is to be entered
var billTypeText= document.querySelector('.billTypeText');
//get a reference to the add button
var addToBillBtn= document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill

//referencing the  totals elements
var callTotalElement=document.querySelector(".callTotalOne");
var smsTotalElement= document.querySelector(".smsTotalOne");
var totalElement= document.querySelector(".totalOne");
//variable to keep track of call cost
var callCost=0;
//variable to keep track of sms cost
var smsCost=0;

function totalTextBill(){
  // get the value entered in the billType textBox
  var billType = billTypeText.value

 // checking the bill type
 if(billType==="call"){
   callCost+=2.75;
 }
 else if(billType==="sms"){
   smsCost+=0.75;
 }
 callTotalElement.innerHTML= callCost.toFixed(2);
 smsTotalElement.innerHTML =smsCost.toFixed(2);
 var totalCost= callCost + smsCost;
 totalElement.innerHTML= totalCost.toFixed(2);
  //check if total exceed 30,then change text to orange
 if(totalCost > 30){
   totalElement.classList.add("warning");
 } 
 //check if total exceed 50,then change text to red
  if(totalCost > 50){
   totalElement.classList.add("danger")
 }

}

//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen



addToBillBtn.addEventListener('click',totalTextBill);