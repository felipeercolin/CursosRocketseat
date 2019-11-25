//requisicoes AJAX - INICIO
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/felipeercolin');
// xhr.send(null);

// //sem a funcao fica sincrona
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4)
//         console.log(JSON.parse(xhr.responseText));
// }
//requisicoes AJAX - FIM

//Promises - INICIO
var minhaPromese = function(){
    // resolve = requisicao 200
    // reject = requisicao != 200
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/felipeercolin');
        xhr.send(null);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4)
            {
                if(xhr.status === 200)
                    resolve(JSON.parse(xhr.responseText));
                else reject('erro na requisicao');
            }
        }
    });
}

minhaPromese()
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});
//Promises - FIM

//Utilizando PLUGIN AXIOS - INICIO

axios.get('https://api.github.com/users/felipeercolin')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});

//Utilizando PLUGIN AXIOS - FIM