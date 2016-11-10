$(document).ready(function(){
    
    var aTipoDespesas;
    if (window.localStorage['tipo-despesas'] != "") {
        aTipoDespesas = JSON.parse(window.localStorage['tipo-despesas'] || '[]') ;
    } else {
        aTipoDespesas = [];        
    }

    var linha = "";
    for(i=0; i<aTipoDespesas.length; i++) {
        linha += '<tr>';
        linha += '<td>'+aTipoDespesas[i].nome+'</td>';
        linha += '<td><div class="glyphicon glyphicon-trash clicavel" id="'+aTipoDespesas[i].id+'"></div></td>';
        linha += '</tr>';
    }
    
    $('#tabela_corpo_tipo').append(linha);
    console.log(linha)
    //Programação do apagar...
    $('.glyphicon-trash').click(function(){
        for(i=0; i< aTipoDespesas.length; i++) {
            if(aTipoDespesas[i].id == $(this).attr('id')) {
                aTipoDespesas.splice(i, 1);
            }
        }
        window.localStorage['tipo-despesas'] = JSON.stringify(aTipoDespesas);
        
        $(this).parent().parent().hide();
    });

    $('#btnAddTipoDespesa').click(function(){
        var aTipoDespesas;

        if (window.localStorage['tipo-despesas'] != "") {
            aTipoDespesas = JSON.parse(window.localStorage['tipo-despesas'] || '[]') ;
        } else {
            aTipoDespesas = [];        
        }        
        
        var oTipoDespesa = {
            id: new Date().getTime(),
            nome: $('#nome').val(),
        };

        aTipoDespesas.push(oTipoDespesa);

        window.localStorage['tipo-despesas'] = JSON.stringify(aTipoDespesas);

        window.location.href="index.html"; 
    });
    
    
    
});