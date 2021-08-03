const conta = document.querySelector('#conta')

const selectPorcent = document.querySelector('#selectPorcentagem')

const custom = document.querySelector('#custom')

const numPessoas = document.querySelector('#pessoas')
        
const btnCalc = document.querySelector('#calc')

const resGorjeta = document.querySelector('#resGorjeta')
const resTotal = document.querySelector('#resTotal')
const btnLimpar = document.querySelector('#btnLimpar')

const calc = () =>{
    conta.style.border = '1px solid rgba(0, 0, 0, 0.555)'
    numPessoas.style.border = '1px solid rgba(0, 0, 0, 0.555)'

    if(conta.value == '' && numPessoas.value == '' || conta.value < 0 && numPessoas.value < 0){
        conta.style.border = '2px solid red'
        numPessoas.style.border = '2px solid red'

        alert('Informações inválidas!')
    } else if(conta.value == ''){
        conta.style.border = '2px solid red'

        alert('Informações inválidas!')
    } else if(numPessoas.value == ''){
        numPessoas.style.border = '2px solid red'

        alert('Informações inválidas!')
    } else if(conta.value < 0){
        conta.style.border = '2px solid red'

        alert('Informações inválidas!')
    } else if(numPessoas.value < 0){
        numPessoas.style.border = '2px solid red'

        alert('Informações inválidas!')
    } else if(custom.value < 0 || custom.value > 100){
        custom.style.border = '2px solid red'

        alert('Informações inválidas!')
    } else if(custom.value == ''){
        const res1 = (selectPorcent.value/100)*conta.value
        const res2 = res1/numPessoas.value

        resGorjeta.innerHTML = (`R$${res2.toFixed(2)}`)
        resTotal.innerHTML = (`R$${res1.toFixed(2)}`)
    } else{
        const res3 = (custom.value/100)*conta.value
        const res4 = res3/numPessoas.value

        resGorjeta.innerHTML = (`R$${res4.toFixed(2)}`)
        resTotal.innerHTML = (`R$${res3.toFixed(2)}`)
    }

}

btnCalc.addEventListener('click', calc)

const limpar = () =>{
    conta.value = ''
    numPessoas.value = ''
    custom.value = ''

    resGorjeta.innerHTML = (`R$0.00`)
    resTotal.innerHTML = (`R$0.00`)
}

btnLimpar.addEventListener('click', limpar)