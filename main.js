const mainDiv = document.getElementById('main');

const tipArray = ['5%','10%', '15%', '20%', '50%', 'Custum']

const main = () =>{
  const conteiner = document.createElement('section')
  conteiner.className = 'conteiner'

  const divBill = document.createElement('div')
  divBill.className = 'divBill'

  const bill = document.createElement('h2')
  bill.className = 'text'
  bill.textContent = 'Bill'

  const amount = document.createElement('input')
  amount.setAttribute('type', 'number')
  amount.className = 'amount'

  const divTip = document.createElement('div')
  divTip.className = 'divTip'

  const selectTip = document.createElement('h2')
  selectTip.className = 'text'
  selectTip.textContent = 'Select Tip %'

  const button1 = document.createElement('button')
  button1.className = 'button1'
  button1.textContent = '5%'
  button1.addEventListener('click', ()=>{
    console.log(amount.value)
    let fivePercent = amount.value * 0.05
    console.log(fivePercent/inputPeople.value)
  })
  const button2 = document.createElement('button')
  button2.className = 'button2'
  button2.textContent = '10%'
  button2.addEventListener('click', ()=>{
    console.log(amount.value)
    let tenPercent = amount.value * 0.10
    console.log(tenPercent/inputPeople.value)
  })
  const button3 = document.createElement('button')
  button3.className = 'button3'
  button3.textContent = '15%'
  button3.addEventListener('click', ()=>{
    console.log(amount.value)
    let fiveteenPercent = amount.value * 0.15
    console.log(fiveteenPercent/inputPeople.value)
  })
  const button4 = document.createElement('button')
  button4.className = 'button4'
  button4.textContent = '25%'
  button4.addEventListener('click', ()=>{
    console.log(amount.value)
    let tweentyFivePercent = amount.value * 0.25
    console.log(tweentyFivePercent/inputPeople.value)
  })
  const button5 = document.createElement('button')
  button5.className = 'button5'
  button5.textContent = '50%'
  button5.addEventListener('click', ()=>{
    console.log(amount.value)
    let tweentyFivePercent = amount.value * 0.50
    console.log(tweentyFivePercent/inputPeople.value)
  })
  const button6 = document.createElement('input')
  button6.className = 'button6'
  button6.placeholder = 'Custom'
  button6.addEventListener('keyup', ()=>{
    console.log(amount.value)
    let tweentyFivePercent = amount.value * button6.value /
    console.log(tweentyFivePercent/inputPeople.value)
  })

  const divNumberPeople = document.createElement('div')
  divNumberPeople.className = 'divNumberPeople'

  const numberPeople = document.createElement('h2')
  numberPeople.className = 'text'
  numberPeople.textContent = 'Number of People'

  const inputPeople = document.createElement('input')
  inputPeople.className = 'inputPeople'
  inputPeople.setAttribute('type', 'number')

  const divResults = document.createElement('div')
  divResults.className = 'divResults'

  const tipAmount = document.createElement('h3')
  tipAmount.className = 'textH3'
  tipAmount.textContent = 'Tip Amount'

  const tipNumber = document.createElement('h1')
  tipNumber.className = 'tipNumber'
  tipNumber.textContent = '$0.00'

  const byPerson = document.createElement('h4')
  byPerson.className = 'byPerson'
  byPerson.textContent = '/ person'

  const total = document.createElement('h3')
  total.className = 'textH3'
  total.textContent = 'Total'

  const byPerson2 = document.createElement('h4')
  byPerson2.className = 'byPerson2'
  byPerson2.textContent = '/ person'

  const tipTotal = document.createElement('h1')
  tipTotal.className = 'tipTotal'
  tipTotal.textContent = '$0.00'

  const reset = document.createElement('button')
  reset.className = 'reset'
  reset.textContent = 'RESET'

  divBill.append(bill, amount)
  divTip.append(selectTip, button1, button2, button3, button4, button5, button6)
  divNumberPeople.append(numberPeople, inputPeople)
  divResults.append(tipAmount, tipNumber, total, tipTotal, reset)

  conteiner.append(divBill, divTip, divNumberPeople, divResults, byPerson, byPerson2)
  return conteiner;
}

mainDiv.append(main())