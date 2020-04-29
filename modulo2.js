var box = document.querySelector('#corpo');
var btnquadrado = document.createElement('button');
var cnt=0 //contador de ID;
btnquadrado.appendChild(document.createTextNode('Gerar quadrados'));
box.appendChild(btnquadrado);

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function colorir(qual){
    var newColor = getRandomColor();
    var quadrado = document.getElementById(qual);
    quadrado.style.backgroundColor = newColor;
}


function criarquadrados(){
    var quadrado = document.createElement('div');
    quadrado.id = cnt;
    cnt++;
    quadrado.style.width=100;
    quadrado.style.height=100;
    quadrado.style.backgroundColor='#f00';
    quadrado.style.marginLeft='20px';
    quadrado.style.marginTop='20px';
    quadrado.onmouseover = function(){
        colorir(this.id);
    };
    box.appendChild(quadrado);

}

btnquadrado.onclick = function(){
    criarquadrados()
};


var box2 = document.querySelector('#lista');
lista = document.createElement('ul');

var inputNomes = document.createElement('input');
inputNomes.type = 'text';
box2.appendChild(inputNomes);

var btnNomes= document.createElement('button');
btnNomes.appendChild(document.createTextNode('Adicionar nome'));
box2.appendChild(btnNomes);

var nomes = ['Diego', 'Gabriel', 'Lucas'];

function colocarnome(){
    var nomeinput = inputNomes.value;
    inputNomes.value='';
    lista.innerHTML='';
    nomes.push(nomeinput);
    for (nome of nomes){
        var linha = document.createElement('li');
        var texto = document.createTextNode(nome);
        linha.appendChild(texto);
        lista.appendChild(linha);
    }
    box2.appendChild(lista);
}

for (nome of nomes){
    var linha = document.createElement('li');
    var texto = document.createTextNode(nome);
    linha.appendChild(texto);
    lista.appendChild(linha);
}
box2.appendChild(lista);

btnNomes.onclick=function(){
    colocarnome();
};