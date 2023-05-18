document.getElementById("btnPesquisar").addEventListener("click", function(){
    var cep = document.getElementById("cep").value //pega o valor do id cep
    var URL = "https://viacep.com.br/ws/"+ cep + "/json/"; //link da api
    var resultado = document.getElementById("resultado");//pega a div resul
    
    //função Fetch é responsavel por fazer uma busca 
    fetch(URL).then(response => response.json()).then(dados =>{
        if(dados.erro){
            resultado.innerHTML = "cep não encontrado"
        }else{
            resultado.innerHTML = " Rua: " + dados.logradouro + "bairro" + dados.bairro
           }
        }).catch(error => console.error(error))
})