
$(document).ready(function(){

    // utilização do plugin de maskara
    $("#cpf").mask("999.999.999-99");
    $("#data_nasc").mask("99/99/9999");
    $("#formcad").submit(validar_custom);
    $('[obrigatorio=sim]').each(function(){
        $("label[for="+$(this).attr("name")+"]")
        .append(" <span style='color:red;'>*</span> ")
        .css('font-weight','bold');
    });
});

function validar_custom()
{
    var tudo_ok;
    tudo_ok = validar();

    if( !tudo_ok ) { return false; }

    if( $('#senha').val() != $('#senha_confirm').val() )
    {
        $('#div_error_senha_confirm').html('A confirmação da senha é diferente da senha!');
        return false;
    }

    return true;

}

