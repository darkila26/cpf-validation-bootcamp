console.log('Carrega o javascript');

// Checks if the CPF is correct

function validaCPF(cpf) {
    console.log(cpf.length);
    if (cpf.length != 11) {
    return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        console.log("Numero o cpf " + numeros);
        console.log("Digito do cpf " + digitos);
        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;

        }   var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
            if (resultado != digitos.charAt(0)) {
        return false;
    }   soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
 
    // Validação do segundo dígito  
    if (resultado != digitos.charAt(1)) {
        return false;
    }
    return true;
    }
}

// Function to validate CPF which is tax identification number in Brazil

function validacao() {
    console.log('Iniciando a validação de CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    // Gets CPF number, value from input form

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';

    }
}



