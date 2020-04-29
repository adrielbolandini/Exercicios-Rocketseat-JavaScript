var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

console.log('O usuário mora em '+endereco.cidade+' / '+endereco.uf+', no bairro '+endereco.bairro+', na rua '+endereco.rua+' com número: '+endereco.numero);

function pares(x,y){
    var par=[];
    while(x<=y){
        if(x%2==0){
            par.push(x);
        }
        x++;
    }
    return par;
}
var x = parseInt(prompt('Insira um valor X'));
var y = parseInt(prompt('Insira um valor Y'));
console.log(pares(x,y));

function temHabilidade(skills) {
    var tem = skills.indexOf('Javascript');
    if (tem===0){
        return true;
    } else {
        return false;
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));

function experiencia(anos) {
    if (anos<=1 && anos>=0){
        return 'Iniciante';
    } else if (anos>1 && anos <=3){
        return 'Intermediário';
    } else if (anos>3 && anos<=6){
        return 'Avançado';
    } else if (anos>6){
        return 'Jedi Master';
    } else{
        return 'Nenhum valor válido inserido';
    }
}

var anos = parseInt(prompt('Quantos anos de estudo?'));
console.log(experiencia(anos));

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function escrever(usuarios){
    for (usuario of usuarios){
        var habilidades=[];
        for (habilidade of usuario.habilidades){
            habilidades.push(" "+habilidade);
        }
        console.log('O '+usuario.nome+' possui as habilidades: '+habilidades);
    }
}
escrever(usuarios);