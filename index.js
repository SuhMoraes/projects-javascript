// Pegando os dados

const calcular = document.getElementById('calcular');

function imc () {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if ( nome!== '' && altura !== '' && peso !== '') {

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if(valorIMC < 18.5){
      classificacao = 'Você está abaixo do peso. Necessário se alimentar melhor!'
    } else if(valorIMC < 25 ) {
      classificacao = 'Você está de bem com a sua saúde. Parabéns!';
    }else if(valorIMC < 30) {
      classificacao = 'Atenção, se cuide! Você esta um pouco acima do seu peso ideal! ';
    } else if(valorIMC < 35) {
      classificacao = 'Alerta! Você atingiu o grau de obesidade I';
    } else if(valorIMC < 40) {
      classificacao = 'Cuidado!! Você atingiu o grau de obesidade II!';
    } else{
      classificacao = "Se cuide! Pois você atenigiu o grau de obesidade III!"
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC}. ${classificacao}`; 

  } else {
    resultado.textContent = 'Por favor, informe todos os dados!!'
  }
}
// Acessando a propriedade do elemento
calcular.addEventListener('click', imc);