const conta = document.querySelector('#conta')
const contaNum = Number(conta)

const numPorcentagem = document.querySelector('#numPorcentagem')
const btnPorcentagem = document.querySelectorAll('.btnPorcentagem')

const numPessoas = document.querySelector('#pessoas')
const numPessoasNum = Number(numPessoas)

const btnCalc = document.querySelector('#calc')

const resGorjeta = document.querySelector('#resGorjeta')
const resTotal = document.querySelector('#resTotal')
const btnLimpar = document.querySelector('#btnLimpar')

const calc = () =>{

    conta.style.border = '1px solid rgba(0, 0, 0, 0.555)'
    numPessoas.style.border = '1px solid rgba(0, 0, 0, 0.555)'

    if(conta.value == '' && numPessoas.value == ''){
        conta.style.border = '2px solid red'
        numPessoas.style.border = '2px solid red'

        alert('Informações inválidas!')
    } else if(conta.value == ''){
        conta.style.border = '2px solid red'

        alert('Informações inválidas!')
    } else if(numPessoas.value == ''){
        numPessoas.style.border = '2px solid red'

        alert('Informações inválidas!')
    }

    if(conta.value < 0 && numPessoas.value < 0){
        conta.style.border = '2px solid red'
        numPessoas.style.border = '2px solid red'

        alert('Informações inválidas!')
    } else if(conta.value < 0){
        conta.style.border = '2px solid red'

        alert('Informações inválidas!')
    } else if(numPessoas.value < 0){
        numPessoas.style.border = '2px solid red'

        alert('Informações inválidas!')
    }
   
}

btnCalc.addEventListener('click', calc)

const limpar = () =>{
    conta.value = ''
    numPorcentagem.value = ''
    numPessoas.value = ''

    resGorjeta.innerHTML = (`R$0.00`)
    resTotal.innerHTML = (`R$0.00`)
}

btnLimpar.addEventListener('click', limpar)