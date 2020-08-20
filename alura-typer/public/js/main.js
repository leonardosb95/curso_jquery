var frase = $(".frase").text(); //seletor de css que retorna o elemento que eu quero
var tamanhoFrase = frase.split(" "); // quebra as palavras por espaço
var numPlavras = tamanhoFrase.length; //tamanho de palavras na frase
var tamanhoFrase = $("#tamanho-frase"); //pega o span
tamanhoFrase.text(numPlavras); //passa o num de palavras
var campo = $(".campo-digitacao");
campo.on("input", function() {
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
});