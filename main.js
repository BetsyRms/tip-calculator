const mainDiv = document.getElementById('main');

const tipArray = ['5%','10%', '15%', '20%', '50%', 'Custum']

const main = () =>{
  const conteiner = document.createElement('section')
  conteiner.className = 'conteiner'

  const divBill = document.createElement('div')
  divBill.className = 'divBill'

  const bill = document.createElement('h2')
  bill.className = 'bill'
  bill.textContent = 'Bill'

  const amount = document.createElement('input')
  amount.setAttribute('type', 'number')
  amount.className = 'amount'

  const divTip = document.createElement('div')
  divTip.className = 'divTip'

  const selectTip = document.createElement('h2')
  selectTip.className = 'selectTip'
  selectTip.textContent = 'Select Tip %'


  const button1 = document.createElement('button')
  button1.className = 'button1'
  button1.textContent = '5%'
  button1.addEventListener('click', ()=>{
    let fivePercent = amount.value * 0.05 / inputPeople.value
    tipNumber.innerText = '$'+fivePercent.toFixed(2)
    let billByPerson = amount.value/inputPeople.value
    let totalFivePercent = billByPerson+fivePercent
    tipTotal.innerText = '$'+totalFivePercent.toFixed(2)
    if(inputPeople.value==0){
      alert('Please set amount')
      tipNumber.innerText = '$0.00'
      tipTotal.innerText = '$0.00'
    }
    if(fivePercent.value!=='$0.00'){
      reset.disabled = false
    }
  })
  const button2 = document.createElement('button')
  button2.className = 'button2'
  button2.textContent = '10%'
  button2.addEventListener('click', ()=>{
    let tenPercent = amount.value * 0.10/inputPeople.value
    tipNumber.innerText = '$'+tenPercent.toFixed(2)
    let billByPerson = amount.value/inputPeople.value
    let totalTenPercent = billByPerson+tenPercent
    tipTotal.innerText = '$'+totalTenPercent.toFixed(2)
    if(inputPeople.value==0){
      alert('Please set amount')
      tipNumber.innerText = '$0.00'
      tipTotal.innerText = '$0.00'
    }
    if(tenPercent.value!==NaN){
      reset.disabled = false
    }
  })
  const button3 = document.createElement('button')
  button3.className = 'button3'
  button3.textContent = '15%'
  button3.addEventListener('click', ()=>{
    let fifteenPercent = amount.value * 0.15/inputPeople.value
    tipNumber.innerText = '$'+fifteenPercent.toFixed(2)
    let billByPerson = amount.value/inputPeople.value
    let totalfiftenPercent = billByPerson+fifteenPercent
    tipTotal.innerText = '$'+totalfiftenPercent.toFixed(2)
    if(inputPeople.value==0){
      alert('Please set amount')
      tipNumber.innerText = '$0.00'
      tipTotal.innerText = '$0.00'
    }
    if(fifteenPercent.value!==NaN){
      reset.disabled = false
    }
  })
  const button4 = document.createElement('button')
  button4.className = 'button4'
  button4.textContent = '25%'
  button4.addEventListener('click', ()=>{
    let twentyFivePercent = amount.value * 0.25/inputPeople.value
    tipNumber.innerText = '$'+twentyFivePercent.toFixed(2)
    let billByPerson = amount.value/inputPeople.value
    let totalTwentyFivePercent = billByPerson+twentyFivePercent
    tipTotal.innerText = '$'+totalTwentyFivePercent.toFixed(2)
    if(twentyFivePercent.value!==NaN){
      reset.disabled = false
    }
  })
  const button5 = document.createElement('button')
  button5.className = 'button5'
  button5.textContent = '50%'
  button5.addEventListener('click', ()=>{
    let fiftyPercent = amount.value * 0.50/inputPeople.value
    tipNumber.innerText = '$'+fiftyPercent.toFixed(2)
    let billByPerson = amount.value/inputPeople.value
    let totalFiftyPercent = billByPerson+fiftyPercent
    tipTotal.innerText = '$'+totalFiftyPercent.toFixed(2)
    if(inputPeople.value==0){
      alert('Please set amount')
      tipNumber.innerText = '$0.00'
      tipTotal.innerText = '$0.00'
    }
    if(fiftyPercent.value!==NaN){
      reset.disabled = false
    }
  })
  const button6 = document.createElement('input')
  button6.className = 'button6'
  button6.placeholder = 'Custom'
  button6.addEventListener('keyup', ()=>{
    let custom = amount.value * button6.value / 100 /inputPeople.value
    tipNumber.innerText = '$'+custom.toFixed(2)
    let billByPerson = amount.value/inputPeople.value
    let totalPercent = billByPerson+custom
    tipTotal.innerText = '$'+totalPercent.toFixed(2)
    if(button6.value==0 || inputPeople.value==0){
      alert('Please set amount')
      tipNumber.innerText = '$0.00'
      tipTotal.innerText = '$0.00'
    }
    if(custom.value!==NaN){
      reset.disabled = false
    }
  })

  const divNumberPeople = document.createElement('div')
  divNumberPeople.className = 'divNumberPeople'

  const numberPeople = document.createElement('h2')
  numberPeople.className = 'numberPeople'
  numberPeople.textContent = 'Number of People'

  const inputPeople = document.createElement('input')
  inputPeople.className = 'inputPeople'
  inputPeople.setAttribute('type', 'number')
  // inputPeople.addEventListener('keyup', ()=>{
  //   if(inputPeople.value==0){
  //     button1.disabled = false
  //   }
  // })

  const divResults = document.createElement('div')
  divResults.className = 'divResults'

  const divTipAmount = document.createElement('div')
  divTipAmount.className = 'divTipAmount'

  const tipAmount = document.createElement('h3')
  tipAmount.className = 'textH3'
  tipAmount.textContent = 'Tip Amount'

  const tipNumber = document.createElement('h1')
  tipNumber.className = 'tipNumber'
  tipNumber.textContent = '$0.00'

  const byPerson = document.createElement('h4')
  byPerson.className = 'byPerson'
  byPerson.textContent = '/ person'

  const divTotal = document.createElement('div')
  divTotal.className = 'divTotal'

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
  reset.disabled = true
  reset.addEventListener('click', ()=>{
    location.href=location.href
  })

  divBill.append(bill, amount)
  divTip.append(button1, button2, button3, button4, button5, button6)
  divNumberPeople.append(numberPeople, inputPeople)
  divTipAmount.append(tipAmount, tipNumber)
  divTotal.append(total, tipTotal)
  divResults.append(divTipAmount, divTotal, reset)

  conteiner.append(divBill, selectTip, divTip, divNumberPeople, divResults, byPerson, byPerson2)
  return conteiner;
}

mainDiv.append(main())