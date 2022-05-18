function meuEscopo() {
    const form = document.querySelector('#formulario');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputPeso = e.target.querySelector('#peso');
        const inputAltura = e.target.querySelector('#altura');

        const valorPeso = Number(inputPeso.value);
        const valorAltura = Number(inputAltura.value);

        if (!valorPeso && !valorAltura) {
            setResultado('Peso e Altura Inválida', false);
            return;
        }

        if (!valorPeso) {
            setResultado('Peso Inválido', false);
            return;
        }

        if (!valorAltura) {
            setResultado('Altura Inválida', false);
            return;
        }


        const getIMC = function (peso, altura) {
            const imc = peso / altura ** 2;
            return Number((imc.toFixed(2)));
        }

        const imc = getIMC(valorPeso, valorAltura);
        const NivelIMC = getNivelIMC(imc);

        setResultado(NivelIMC, true);



    })

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = `<p>${msg}</p>`;
        isValid ? resultado.classList.add('paragrafo-resultado') : resultado.classList.add('bad');
    }


    const getNivelIMC = function (imc) {
        const resultadoIMC = ['Abaixo do Peso', 'Peso normal', 'sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        if (imc >= 39.9) return resultadoIMC[5];
        if (imc >= 34.9) return resultadoIMC[4];
        if (imc >= 29.9) return resultadoIMC[3];
        if (imc >= 24.9) return resultadoIMC[2];
        if (imc >= 18.5) return resultadoIMC[1];
        if (imc < 18.5) return resultadoIMC[0];
    }
}

meuEscopo();