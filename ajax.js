$(document).ready(function () {
      $("#formulario").bind("submit",function(){
        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data:$(this).serialize(),
            beforeSend: function(){
                
            },
            complete:function(data){
            
            },
            success: function(data){
              alert(data);      
            },
            error: function(data){
                alert("Problemas al tratar de enviar el formulario");
            }
        });
        return false;
    });
});  