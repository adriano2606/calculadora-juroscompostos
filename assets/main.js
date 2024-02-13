function calcular(){
    let initialAmount = parseFloat(document.getElementById('initial_amount').value)
    let aporteAmount = parseFloat(document.getElementById('aporte_amount').value)
    let interestRate = parseFloat(document.getElementById('interest_rate').value)
    let time = parseFloat(document.getElementById('time').value)
    let resultado = initialAmount;
    let contentResult = document.getElementsByClassName('result')[0]

    if ((isNaN(initialAmount) || initialAmount == 0) || (isNaN(aporteAmount) || aporteAmount == 0) || (isNaN(interestRate) || interestRate == 0) || (isNaN(time) || time == 0)){

    } else {

     for(i=1;i<=time;i++){
        resultado += resultado * (interestRate/100)
        resultado += aporteAmount
    }

    resultado = resultado.toFixed(2)
    let totalInvestido = (initialAmount + (aporteAmount*time)).toFixed(2)
    let totalJuros = (resultado - totalInvestido).toFixed(2)
    let percentualGanho = ((totalJuros*100)/totalInvestido).toFixed(2) 

    contentResult.innerHTML = `
    <h2>Aqui está o resultado:</h1>
    <div class="result__content">
    <span>O total investido foi de <span class="destaque" >R$ ${totalInvestido}</span>.</span>
    <span>O ganho de juros compostos foi de <span class="destaque" id="totalJuros">R$ ${totalJuros}</span>.</span>
    <span>O valor final acumulado foi de <span class="destaque" id="resultado">R$ ${resultado}</span>, um rendimento de <span class="destaque">${percentualGanho}%</span> do valor aplicado.</span>
    </div>
    `    
    }
}
    