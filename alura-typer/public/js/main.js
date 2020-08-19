var frase = $(".frase").text(); //seletor de css que retorna o elemento que eu quero
var tamanhoFrase = frase.split(" "); // quebra as palavras por espaço
var numPlavras = tamanhoFrase.length; //tamanho de palavras na frase
var tamanhoFrase = $("#tamanho-frase"); //pega o span
tamanhoFrase.text(numPlavras); //passa o num de palavras



console.log()