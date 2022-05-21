console.log('Carrega o javascript');

// Checks if the CPF is correct

function validaCPF() {
    return false;
}

// Function to validate CPF which is tax identification number in Brazil

function validacao() {
    console.log('Iniciando a validação de CPF');

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



