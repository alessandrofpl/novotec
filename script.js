function validar(){

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email == "ale" && senha== "000"){
        alert("Bem Vindo!");
    }else{
        alert("Verifique os Dados");
    }
}