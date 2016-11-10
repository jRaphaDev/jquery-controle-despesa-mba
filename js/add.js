$(document).ready(function(){

    $('#btnAdd').click(function(){
       var aDespesas;
        if (window.localStorage['despesas'] != ""){
            aDespesas = JSON.parse(window.localStorage['despesas'] || '[]') ;
        } else {
            aDespesas = [];        
        }

        var sIcone = "";
        switch($('#tipo').val()) {
            case "Mercado":
                sIcone = "glyphicon-shopping-cart";
            break;
            case "Lazer":
                sIcone = "glyphicon-knight";
            break;
            case "Saúde":
                sIcone = "glyphicon-heart-empty";
            break;    
        }
        
        var oDespesa = {
            id: new Date().getTime(),
            tipo: $('#tipo').val(),
            icone: sIcone,
            nome: $('#nome').val(),
            data: $('#data').val(),
            valor: $('#valor').val()
        };

        aDespesas.push(oDespesa);

        window.localStorage['despesas'] = JSON.stringify(aDespesas);

        window.location.href="index.html"; 
    });
    
    var aTipoDespesas;
    if (window.localStorage['tipo-despesas'] != ""){
        aTipoDespesas = JSON.parse(window.localStorage['tipo-despesas'] || '[]') ;
    } else {
        aTipoDespesas = [];        
    }

    var options = '<option value="">escolha um tipo de despesa</option>';	
    $.each(aTipoDespesas, function (key, val) {
        options += '<option value="' + val.nome + '">' + val.nome + '</option>';
    });					
    $("#tipos-despesas").html(options);				
    
});