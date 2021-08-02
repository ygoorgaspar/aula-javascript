
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://www.alura.com.br/?gclid=CjwKCAjwjJmIBhA4EiwAQdCbxpOjnz5igqmsCCbwNUYqx1VNKvevKU-e3o740EHpYSTV3tDUJx0WdRoCA_gQAvD_BwE")
    window.location.href = "https://www.alura.com.br/?gclid=CjwKCAjwjJmIBhA4EiwAQdCbxpOjnz5igqmsCCbwNUYqx1VNKvevKU-e3o740EHpYSTV3tDUJx0WdRoCA_gQAvD_BwE"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert.open("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load (){
    alert("pagina carregada")
}

function funcaoCharge(elemento){
    console.log(elemento.value)
}

/*

function soma(n1, n2){
    return n1 +n2;
}


/*
function validaIdade(idade){
    var validar = true;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

alert(soma(5, 10));



/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());


/*
var count;
for(count+0; count <= 5; count++){
    alert(count);
};


/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}


/* 
var idade = prompt("Qual seu idade");
if (idade > 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
};


//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);


//var lista = ["maça", "pêra", "laranja"] ;
//lista.push("uva");
//lista.pop();


//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//var nome = "Ygor Guilherme";
//var idade = "21";
//var idade2 = "21";
//var frase = "Japão é melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"));
*/ 