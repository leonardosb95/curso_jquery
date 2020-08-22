var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

// $(document).ready(function() {
//     atualizarTamanhoFrase();
//     inicializaContadores();
//     inicializaCronometro();
//     $("#botao-reiniciar").click(reiniciaJogo);
// });

$(function() { //É uma função ready também
    atualizarTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizarTamanhoFrase() {
    var frase = $(".frase").text(); //seletor de css que retorna o elemento que eu quero
    var tamanhoFrase = frase.split(" "); // quebra as palavras por espaço
    var numPlavras = tamanhoFrase.length; //tamanho de palavras na frase
    var tamanhoFrase = $("#tamanho-frase"); //pega o span
    tamanhoFrase.text(numPlavras); //passa o num de palavras
}




function inicializaContadores() {
    campo.on("input", function() {
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}


function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function() {
        var cronometroID = setInterval(() => {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                //campo.css("background-color", "lightgray");
                // campo.addClass("campo-desativado"); //Conseguimos chamar a folha de estilo estilos.css
                campo.toggleClass("campo-desativado");
            }
        }, 1000);

    });
}


$("#botao-reiniciar").click(reiniciaJogo);

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
}