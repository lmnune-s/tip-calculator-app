// Pegar os inputs
let bill = document.querySelector('#bill-price')
let numberOfPeople = document.querySelector('#qty-people')

// Pegar os buttons
const buttonFive = document.querySelector('#tip-five')
const buttonTen = document.querySelector('#tip-ten')
const buttonFifteen = document.querySelector('#tip-fifteen')
const buttonTwentyFive = document.querySelector('#tip-twenty-five')
const buttonFifty = document.querySelector('#tip-fifty')
const buttonZero = document.querySelector('#tip-zero')

const buttonReset = document.getElementById('reset')

// Pegar campos de resultados
let tipAmountResult = document.querySelector('#tip-result-value')
let totalResult = document.querySelector('#total-result-value')
let billResult = document.querySelector('#bill-result-value')

// Cálculos buttons
buttonFive.addEventListener('click', () => {
  let billValue = parseFloat(bill.value)
  let numPeople = parseInt(numberOfPeople.value)

  if (billValue > 0 && numPeople > 0) {
    let tip = billValue * (5 / 100)
    let tipAmount = (tip / numPeople).toFixed(2)
    let total = ((billValue + tip) / numPeople).toFixed(2)

    let billTotal = parseFloat(tipAmount) + parseFloat(total)
  
    tipAmountResult.innerHTML = `${tipAmount}`
    totalResult.innerHTML = `${total}`
    billResult.innerHTML = `${billTotal.toFixed(2)}` 

  } else {
    alert('Please, fill in the fields!')
  }
})

buttonTen.addEventListener('click', () => {
  let billValue = parseFloat(bill.value)
  let numPeople = parseInt(numberOfPeople.value)

  if (billValue > 0 && numPeople > 0) {
    let tip = billValue * (10 / 100)
    let tipAmount = (tip / numPeople).toFixed(2)
    let total = ((billValue + tip) / numPeople).toFixed(2)

    let billTotal = parseFloat(tipAmount) + parseFloat(total)
  
    tipAmountResult.innerHTML = `${tipAmount}`
    totalResult.innerHTML = `${total}`
    billResult.innerHTML = `${billTotal.toFixed(2)}` 

  } else {
    alert('Please, fill in the fields!')
  }
})

buttonFifteen.addEventListener('click', () => {
  let billValue = parseFloat(bill.value)
  let numPeople = parseInt(numberOfPeople.value)

  if (billValue > 0 && numPeople > 0) {
    let tip = billValue * (15 / 100)
    let tipAmount = (tip / numPeople).toFixed(2)
    let total = ((billValue + tip) / numPeople).toFixed(2)

    let billTotal = parseFloat(tipAmount) + parseFloat(total)
  
    tipAmountResult.innerHTML = `${tipAmount}`
    totalResult.innerHTML = `${total}`
    billResult.innerHTML = `${billTotal.toFixed(2)}` 

  } else {
    alert('Please, fill in the fields!')
  }
})

buttonTwentyFive.addEventListener('click', () => {
  let billValue = parseFloat(bill.value)
  let numPeople = parseInt(numberOfPeople.value)

  if (billValue > 0 && numPeople > 0) {
    let tip = billValue * (25 / 100)
    let tipAmount = (tip / numPeople).toFixed(2)
    let total = ((billValue + tip) / numPeople).toFixed(2)

    let billTotal = parseFloat(tipAmount) + parseFloat(total)
  
    tipAmountResult.innerHTML = `${tipAmount}`
    totalResult.innerHTML = `${total}`
    billResult.innerHTML = `${billTotal.toFixed(2)}` 

  } else {
    alert('Please, fill in the fields!')
  }
})

buttonFifty.addEventListener('click', () => {
  let billValue = parseFloat(bill.value)
  let numPeople = parseInt(numberOfPeople.value)

  if (billValue > 0 && numPeople > 0) {
    let tip = billValue * (50 / 100)
    let tipAmount = (tip / numPeople).toFixed(2)
    let total = ((billValue + tip) / numPeople).toFixed(2)

    let billTotal = parseFloat(tipAmount) + parseFloat(total)
  
    tipAmountResult.innerHTML = `${tipAmount}`
    totalResult.innerHTML = `${total}`
    billResult.innerHTML = `${billTotal.toFixed(2)}` 

  } else {
    alert('Please, fill in the fields!')
  }
})

buttonZero.addEventListener('click', () => {
  let billValue = parseFloat(bill.value)
  let numPeople = parseInt(numberOfPeople.value)

  if (billValue > 0 && numPeople > 0) {
    let tip = billValue * (0 / 100)
    let tipAmount = (tip / numPeople).toFixed(2)
    let total = ((billValue + tip) / numPeople).toFixed(2)

    let billTotal = parseFloat(tipAmount) + parseFloat(total)
  
    tipAmountResult.innerHTML = `${tipAmount}`
    totalResult.innerHTML = `${total}`
    billResult.innerHTML = `${billTotal.toFixed(2)}` 

  } else {
    alert('Please, fill in the fields!')
  }
})

// Button reset
buttonReset.addEventListener('click', () => {
  window.location.reload()
})