const calcularBT = document.getElementById('calcularBT');


function valorImc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    let imc = ((peso/(altura*altura)).toFixed(2));
    return imc
}

function abaixoAcimaImc() {
    
    if (valorImc() < 18.50) {
        return 'abaixo do peso!'
    } else if (valorImc() < 24.5) {
        return 'no peso ideal!'
    } else {
        return 'acima do peso!'
    }
}

function printImc() {
    const nome = document.getElementById('nome').value;
    const resultado = document.getElementById('resultado');

    resultado.innerText = `${nome}, o seu IMC é ${valorImc()} e você está ${abaixoAcimaImc()}`;
}


calcularBT.addEventListener('click', () => {
    printImc()
})

