// get a reference to the sms or call radio buttons
var radioBtn = document.querySelector(".billItemTypeWithSettings")
// get refences to all the settings fields
var callCostSettingsElement = document.querySelector(".callCostSetting")
var smsCostSettingsElement = document.querySelector(".smsCostSetting")
var warningLevelElement = document.querySelector(".warningLevelSetting")
var criticalLevelElement = document.querySelector(".criticalLevelSetting")
//get a reference to the add button
var addBtnSet = document.querySelector(".addBtn")

//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var callCostSettings = 0;
var smsCostsetting = 0;
var warningLevel = 0;
var criticalLevel = 0;

// create a variables that will keep track of all three totals.
var callTotalElementSet = document.querySelector(".callTotalSettings")
var smsTotalElementSet = document.querySelector(".smsTotalSettings")
var totalElementSet = document.querySelector(".totalSettings")
var callTotalSet = 0;
var smsTotalSet = 0;
var totalCostSet = 0;

//add an event listener for when the 'Update settings' button is pressed
function updateSettings() {
  //get the value entered in the four boxes in bill settings

  callCostSettings = Number(callCostSettingsElement.value);
  smsCostSettings = Number(smsCostSettingsElement.value);
  warningLevel = Number(warningLevelElement.value);
  criticalLevel = Number(criticalLevelElement.value);

}
updateSettingsBtn.addEventListener("click", updateSettings)
//add an event listener for when the add button is pressed
function addBtnClicker() {

  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadioBtn) {
    var radioBtn = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
  }
  //checking if it is call or sms, then update appropriate total
  if (radioBtn === "call") {
    callTotalSet += callCostSettings;

  }
  else if (radioBtn === "sms") {
    smsTotalSet += smsCostSettings;

  }
  // return callTotal
  callTotalElementSet.innerHTML = callTotalSet.toFixed(2)
  // return smsTotal
  smsTotalElementSet.innerHTML = smsTotalSet.toFixed(2)
  //sum total of call and sms totals
  var totalCostSet = callTotalSet + smsTotalSet;
  // returns totalBill
  totalElementSet.innerHTML = totalCostSet.toFixed(2)
  //if total exceed 30, turn total amount orange
  if (totalCostSet > warningLevel) {
    totalElementSet.classList.add("warning");
  }
  //if totalBill exceed 50, turn total amount red
  if (totalCostSet > criticalLevel) {
    totalElementSet.classList.add("danger")
    
  }
  if(totalCostSet > criticalLevel){
    totalCostSet = criticalLevel
  }

}
addBtnSet.addEventListener("click", addBtnClicker)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.


