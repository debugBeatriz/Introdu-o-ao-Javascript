function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>"; //innerHTML serve para injetar texto
    //console.log(document.getElementById("agradecimento")); apresentando no console
    //alert("Obrigado por clicar");
}

function redirecionar(){ //pego o id do onclick e coloco na função
    window.open("https://globallab.org/en/#.YZGUBWDMLIU");
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   elemento.innerHTML =  "Obrigado por clicar";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "pase o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*lista de dicionário
var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxo"}]
console.log(frutas);
alert(frutas[1].nome);*/

/*var idade = 18;
if (idade > 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}

var count = 5;
while (count) {
    console.log(count);
    count ++; // count ++ recebe ele mesmo mais 1
}
*/
/* var count; //contando os números de 0 a 5 com o laço for
for(count = 0; count <=5; count ++ ){
    alert(count);
}
 */

/*var d = new Date(); // método construtor que apresenta a data, mês, hora, minuto da máquina
alert(d.getDay());
*/

/*var lista = ["Alemanha", "Inglaterra", "Escócia"]/
lista.push(Polônia);
lista.pop(Inglaterra);
*/

/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/



/*DICIONÁRIO em lista
var frutas = {nome:"maçã", cor:"vermelha"}
console.log(frutas);
alert(frutas.cor);*/


//var lista = ["maçã", "laranja", "banana"];//A principal finalidade é guardar informações de modo ordenado, ou seja, para cada linha, uma informação. 
//a lista sempre começa com 0,1,2.
//lista.pop(); serve para tirar

//lista.push("uva"); //serve para adicionar elementos
//console.log(lista[0]);
//console.log(toString()[0]);//vai mostrar a posição que está exemplo 0  
//console.log(lista.join(" - ")); //tbm transformar em string e pode separar a lista da forma que quiser exe: .,-|
//console.log(toString()); //transforma os elementos array em string
//console.log(lista.reverse()); // mostra os elementos ao contrário
//console.log(lista.length);

//length onsegue ver quantos intens tem, pronúncia lenfi



/*var nome = "bia";
var idade = 20;
var idade2 = 15;
var frase = "Gosto de paçoca"
alert(nome + " tem " + idade + " anos ");
/* toLowerCase letras minúsculas em Javascript
toUpperCase letras maiúsculas
Replace = para mudar o resultado que vai aparecer */
/*console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("paçoca", "bolo"));
alert(frase.replace("paçoca", "bolo"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase);*/
// "para strings,aspas exemplo: letras e conjuntos de caracteres"
// números apenas assim 12.
