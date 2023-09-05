window.onload =function(){
    findProduct();
}

function findProduct(){

    let APIKey = "1790900875764";
    AppSecret = "6ae2a11c15ba1ec55af016908428e8f1"
    let BaseUrl = "https://app.omie.com.br/api/v1/geral/produtos/";

    var headers = new Headers();
    headers.append("Content-type", "appication/json");
    headers.append("mode","no-cors");

    const bodyParameters ={
        app_key : APIKey,
        app_secret: AppSecret,
        call: 'ConsultarProduto',
        param : [{
            "codigo_produto": 0,
            codigo_produto_integracao: "",
            codigo: 242}]
    }
    console.log(bodyParameters)
    const parameters = {method: "POST", headers: headers, body: JSON.stringify(bodyParameters)}


    fetch(BaseUrl, parameters)
    .then(function(response){
        console.log(response)
    })
    .catch(function(err){
        console.console.error(err);
    })
}
