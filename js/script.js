



const request = 'https://app.omie.com.br/api/v1/geral/produtos/';
const JSON = ?JSON='{"call":"ConsultarProduto","app_key": "1790900875764","app_secret":"6ae2a11c15ba1ec55af016908428e8f1","param": [{"codigo_produto": 0,"codigo_produto_integracao": "","codigo": "242"}]}';
const options = {
    method: 'POST',
    headers: {  
                'Content-Type': 'application/json'
            },
    body: JSON
};

fetch(request, options)
.then(function(response){
    if(!response.ok)throw new Error('Erro ao executar requisição , status ' + response.status);
    return response.json();
})
.then(function(data){
        
            console.log(data);
})
.catch(function(error){
console.error();
})

//alert(corpo)


//https://www.youtube.com/watch?v=85vJXFpXLQw
//  ?JSON={"call":"ConsultarProduto","app_key": "1790900875764","app_secret":"6ae2a11c15ba1ec55af016908428e8f1","param": [{"codigo_produto": 0,"codigo_produto_integracao": "","codigo": "242"}]}'


//https://api.redcheck.com.br/public/docs
//https://www.youtube.com/watch?v=qYxeMAE5DEY
//https://www.freecodecamp.org/portuguese/news/fetch-api-como-fazer-solicitacoes-get-e-post-em-javascript/ muito bom
