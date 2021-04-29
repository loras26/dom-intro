// get a reference to the sms or call radio buttons
var radioBtn= document.querySelector("billItemTypeWithSettings")
// get refences to all the settings fields
var callCostSettingsElement= document.querySelector("callCostSetting")
var smsCostSettingsElement=document.querySelector("smsCostSetting")
var warningLevelElement=document.querySelector("warningLevelSetting")
var criticalLevelElement= document.querySelector("criticalLevelSetting")
//get a reference to the add button
var addBtn= document.querySelector(".button-primary")

//get a reference to the 'Update settings' button
var updateSettingsBtn= document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var callCostSettings=0;
var smsCostsetting=0;
var warningLevel=0;
var criticalLevel=0;

// create a variables that will keep track of all three totals.
var callTotalElement =document.querySelector(".callTotalSettings")
var smsTotalElement = document.querySelector(".smsTotalSettings")
var totalElement= dodument.querySelector(".totalSettings")
var callTotal=0;
var smsTotal=0;
var totalCost=0;

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

