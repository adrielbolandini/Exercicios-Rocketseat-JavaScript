var idade = prompt('Insira a idade');

function checaIdade(idade) {
    return new Promise(function(resolve,reject){
        if (idade >= 18){
            resolve();
        } else {
            reject();
        }
    });
}

checaIdade(idade)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
});

var corpo = document.querySelector('#corpo');
var inputElement = document.createElement('input');
inputElement.type='text';
inputElement.placeholder = 'Insira o usuário do GitHub';
corpo.appendChild(inputElement);

var btnElement = document.createElement('button');
btnElement.appendChild(document.createTextNode('Adicionar'));
corpo.appendChild(btnElement);

function pegarepos(){
    return new Promise(function (resolve,reject){
        var xhr = new XMLHttpRequest();
        var user = inputElement.value;
        xhr.open('GET', 'https://api.github.com/users/'+user+'/repos');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState===4){
                if(xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                } else{
                    reject(xhr.status);
                }
            }
        }
    });
}

btnElement.onclick = function(){
    corpo.appendChild(document.createElement('ul'));
    var lista= document.querySelector('#corpo ul');
    lista.innerHTML='';
    var linha=document.createElement('li');
    linha.appendChild(document.createTextNode('Carregando...'));
    lista.appendChild(linha);

    pegarepos()
    .then(function(response){
        lista.innerHTML='';
        for (dado of response){
            var linha=document.createElement('li');
            linha.appendChild(document.createTextNode(dado.name));
            lista.appendChild(linha);
        }
    })
    .catch(function(reject){
        lista.innerHTML='';
        if (reject === 404){
            alert('Usuário não existe');
        } else {
            alert('Algo errado aconteceu!');
        }
    });
};