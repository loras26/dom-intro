//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element

var billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString

var billStringField = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

function totalPhoneBill(phoneBill){

    var phoneBills = phoneBill.split(',');
    var total = 0;

   for(var i=0; i < phoneBills.length; i++){
      var phoneBilled=phoneBills[i].trim();
      if(phoneBilled=== 'call'){
        total += 2.75;
      }else
        if(phoneBilled === 'sms'){
         total += 0.75;
        }
   }

   return total.toFixed(2);
 }

function calculateBtnClicked(){
     // get the string entered in the textArea
    var billString = billStringField.value;

    var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;

    if(roundedBillTotal > 30){
        billTotalElement.classList.add("danger") ;
    }

     if(roundedBillTotal < 30 && roundedBillTotal > 20 ){
        billTotalElement.classList.add("warning");
        billTotalElement.classList.remove("danger");
        

    }
    else if(roundedBillTotal < 20){
        billTotalElement.classList.remove("warning") ;
    }
    
    
   
}

//link the function to a click event on the calculate button

calculateBtn.addEventListener('click', calculateBtnClicked);

