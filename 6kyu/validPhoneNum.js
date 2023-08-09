function validPhoneNumber(phoneNumber){
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber)
 }
 
//console.log(phoneNumber)
// will test the parameter set up and returns a true/false 