// Element Selection:

const submitButton = document.getElementById("submitButton")
const passFail = document.getElementById("passFail")

// Number capture:
function submitForm(event) {
  // Prevents default clearing of form upon submit
  event.preventDefault()

  // Takes value from cardNumber element and assigns it
  let cNumber = document.getElementById("cardNumber").value.trim()
  console.log(cNumber)

  // Card Check & render pass / fail message
  if (luhn(cNumber)) {
    console.log("Pass")
    passFail.innerHTML = "Pass Luhn check"
  } else {
    console.log("Failed")
    passFail.innerHTML = "Fail Luhn check"
  }
}

// Luhn Algo checker:
function luhn(cardNumber) {
  let arr = cardNumber.split("").map(Number)
  let total = 0

  //To be able to manipulate value at every other position
  for (let i = arr.length - 2; i >= 0; i -= 2) {
    let value = arr[i] * 2
    if (value > 9) {
      value -= 9
    }
    total += value
  }
  //To be able to manipulate positions that dont need doubling

  for (let i = arr.length - 1; i >= 0; i -= 2) {
    // If [i] doesn't need doubling (number just carries on, it goes straight to the +=value.)
    total += arr[i]
  }
  return total % 10 === 0 // Returns true if valid test case
}
