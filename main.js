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
  amount.className = 'amount'

  const divTip = document.createElement('div')
  divTip.className = 'divTip'

  const selectTip = document.createElement('h2')
  selectTip.className = 'text'
  selectTip.textContent = 'Select Tip %'

  const button1 = document.createElement('button')
  button1.className = 'button1'
  button1.textContent = '5%'
  const button2 = document.createElement('button')
  button2.className = 'button2'
  button2.textContent = '10%'
  const button3 = document.createElement('button')
  button3.className = 'button3'
  button3.textContent = '15%'
  const button4 = document.createElement('button')
  button4.className = 'button4'
  button4.textContent = '25%'
  const button5 = document.createElement('button')
  button5.className = 'button5'
  button5.textContent = '50%'
  const button6 = document.createElement('button')
  button6.className = 'button6'
  button6.textContent = 'Custom'

  const divNumberPeople = document.createElement('div')
  divNumberPeople.className = 'divNumberPeople'

  const numberPeople = document.createElement('h2')
  numberPeople.className = 'text'
  numberPeople.textContent = 'Number of People'

  const inputPeople = document.createElement('input')
  inputPeople.className = 'inputPeople'

  divBill.append(bill, amount)
  divTip.append(selectTip, button1, button2, button3, button4, button5, button6)
  divNumberPeople.append(numberPeople, inputPeople)

  conteiner.append(divBill, divTip, divNumberPeople)
  return conteiner;
}

mainDiv.append(main())