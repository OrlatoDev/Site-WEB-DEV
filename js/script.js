function VerificaSenha(){
    var elementInputSenha = document.getElementById("senha").value
    var elementeInputCSenha = document.getElementById("csenha").value
    var user = document.getElementById("user").value

    if (user === null || elementInputSenha === null || elementeInputCSenha === null){
        alert("Preencha todos os campos!")
        var erro = true
    }
    else{
        if (elementInputSenha !== elementeInputCSenha){
            alert("Senhas diferentes!")
        }
    }
}

function Enviar(){
    var nome = document.getElementById("name").value;
    var assunto = document.getElementById("subject").value;
    var email = document.getElementById("mail").value;
    var texto = document.getElementById("msg").value;

    if (nome === null || typeof nome === 'undefined'){
        return false;
    }
    if (assunto === null || typeof assunto === 'undefined'){
        return false;
    }
    if (email === null || typeof email === 'undefined'){
        return false;
    }
    if (texto === null || typeof texto === 'undefined'){
        return false;
    }
    else{
        console.log(nome, assunto, email, texto)
    }
}
