$(document).ready(function () 
{
   // Cargar selects al cargar la página
    
   $.getJSON("https://api-sepomex.hckdrk.mx/query/get_estados", function(data)
   {
        $.each(data.response.estado, function(id,estado)
        {
            $("#estado").append('<option value="'+estado+'">'+estado+'</option>');
        });
   });
   $.getJSON("https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/Ciudad de México" , function(data)
   {
        $.each(data.response.municipios, function(id,municipio)
        {
            $("#municipio").append('<option value="'+municipio+'">'+municipio+'</option>');
        });
   });
   $.getJSON("https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/Álvaro Obregón" , function(data)
   {
        $.each(data.response.colonia, function(id,colonia)
        {
            $("#colonia").append('<option value="'+colonia+'">'+colonia+'</option>');
        });
   });
   $.getJSON("https://api-sepomex.hckdrk.mx/query/get_cp_por_municipio/Álvaro Obregón" , function(data)
   {
        $.each(data.response.cp, function(id,cp)
        {
            $("#cp").append('<option value="'+cp+'">'+cp+'</option>');
        });
   });
   
   //Cargar el municipio, colonia y código postal de forma dinámica al cambiar un estado. 
    
   var get_estado = "https://api-sepomex.hckdrk.mx/query/get_estados";
   var get_municipio = "https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/";
   var get_colonia = "https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/";
   var get_cp = "https://api-sepomex.hckdrk.mx/query/get_cp_por_municipio/";
   
   $("#estado").change(function()
   {
      var cambio_estado = $("#estado").val();
      var municipio_dinamico = get_municipio.concat(cambio_estado);
      $.getJSON(municipio_dinamico , function(data)
      {
         $("#municipio option").remove();
         $.each(data.response.municipios, function(id,municipio)
         {
             $("#municipio").append('<option value="'+municipio+'">'+municipio+'</option>');
             if(id == 0)
             {
                var cambio_municipio = $("#municipio").val();
                var colonia_dinamico = get_colonia.concat(cambio_municipio);
                $.getJSON(colonia_dinamico , function(data)
                {
                   $("#colonia option").remove();
                   $.each(data.response.colonia, function(id,colonia)
                   {
                      $("#colonia").append('<option value="'+colonia+'">'+colonia+'</option>');
                   });
                });
                
                var cambio_cp = $("#municipio").val();
                var cp_dinamico = get_cp.concat(cambio_cp);
                $.getJSON(cp_dinamico , function(data)
                {
                   $("#cp option").remove();
                   $.each(data.response.cp, function(id,cp)
                   {
                      $("#cp").append('<option value="'+cp+'">'+cp+'</option>');
                   });
                });   
             }
         });
      });
   });
    
   // Cambia la colonia y código postal de forma dinámica al cambiar un municipio
    
   $("#municipio").change(function()
   {
      var cambio_municipio = $("#municipio").val();
      var colonia_dinamico = get_colonia.concat(cambio_municipio);
      $.getJSON(colonia_dinamico , function(data)
      {
         $("#colonia option").remove();
         $.each(data.response.colonia, function(id,colonia)
         {
             $("#colonia").append('<option value="'+colonia+'">'+colonia+'</option>');
             if(id == 0)
             {
                var cambio_cp = $("#municipio").val();
                var cp_dinamico = get_cp.concat(cambio_cp);
                $.getJSON(cp_dinamico , function(data)
                {
                   $("#cp option").remove();
                   $.each(data.response.cp, function(id,cp)
                   {
                      $("#cp").append('<option value="'+cp+'">'+cp+'</option>');
                   });
                });   
             }
         });
      });
   });
   
   
});  