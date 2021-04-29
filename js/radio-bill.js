// get a reference to the sms or call radio button
var billItemType =document.querySelector(".billItemTypeRadio")
//get a reference to the add button  
var addButton= document.querySelector(".radioBillAddBtn")
//create a variable that will keep track of the total bill
//referencing totals elements
var callTotalElement= document.querySelector(".callTotalTwo")
var smsTotalElement= document.querySelector(".smsTotalTwo")
var totalElement= document.querySelector(".totalTwo")
// variable to track calls total
var callTotal=0;
//variable to track  sms's total
var smsTotal=0;

//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function radioBillBtn(){

 var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
 if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
 }
 //checking if it is call or sms, then update appropriate total
 if(billItemType==="call"){
   callTotal+= 2.75;
  }
  else if(billItemType==="sms"){ 
   smsTotal+= 0.75;
  }
  // return callTotal
  callTotalElement.innerHTML= callTotal.toFixed(2)
  // return smsTotal
  smsTotalElement.innerHTML= smsTotal.toFixed(2)
  //sum total of call and sms totals
  var totalBill= callTotal + smsTotal;
// returns totalBill
  totalElement.innerHTML= totalBill.toFixed(2)
  //if total exceed 30, turn total amount orange
  if(totalBill > 30){
    totalElement.classList.add("warning");
  }
  //if totalBill exceed 50, turn total amount red
  if(totalBill > 50){
    totalElement.classList.add("danger")
  }
}

 addButton.addEventListener("click", radioBillBtn)        

           
