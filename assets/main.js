function calcular(){
    let initialAmount = parseFloat(document.getElementById('initial_amount').value)
    let aporteAmount = parseFloat(document.getElementById('aporte_amount').value)
    let interestRate = parseFloat(document.getElementById('interest_rate').value)
    let time = parseFloat(document.getElementById('time').value)
    let resultadoField = document.getElementById('resultado')
    let totalInvestidoField = document.getElementById('totalInvestido');
    let totalJurosField = document.getElementById('totalJuros');
    let percentualGanhoField = document.getElementById('percentualGanho');
    let resultado = initialAmount;
    let resultField = document.getElementsByClassName('result')[0];

 for(i=1;i<=time;i++){
    resultado += resultado * (interestRate/100)
    resultado += aporteAmount
}

resultado = resultado.toFixed(2)
let totalInvestido = (initialAmount + (aporteAmount*time)).toFixed(2)
let totalJuros = (resultado - totalInvestido).toFixed(2)
let percentualGanho = ((totalInvestido*100)/resultado).toFixed(2)

totalInvestidoField.innerText = totalInvestido
totalJurosField.innerText = totalJuros
resultadoField.innerText = resultado
percentualGanhoField.innerText = percentualGanho + '%'
resultField.style = "visibility: visible" 
 
}