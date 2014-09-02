
        /*var emocionesArray = new Array( "alegr’a", "tristeza", "amor", "odio", "joker");
        var trabajoArray = new Array( "su formaci—n profesional", "su carrera professional", "su sueldo", "su mejor jefe", "su peor jefe" );
        var famliaArray = new Array( "su  padre", "su madre", "sus hermanos", "sus primos", "sus nietos", "sus suegros");
        var deportesArray = new Array( "futbol", "deportes que juega/jug—", "deportes que le gustan", "deportes del colegio" );
        var historiaArray = new Array( "el mundo cuando nasc’", "1978", "1994", "como el mundo ha cambiado" );
        var lugaresArray = new Array( "donde nasc’", "donde cresc’", "su colegio", "sus casas", "su pa’s" );*/
        
        
        window.onload = function (){
                $( "#volver" ).hide();
                $( "#set1" ).hide();
                $( "#set2" ).hide();
                $( "#set3" ).hide();
                $( "#set4" ).hide();
                $( "#set5" ).hide();
                $( "#set6" ).hide();
                $('.card').click(function() {
                        $( "#volver" ).show();
                        $("#strapline").text("Hable de una carta"); 
                        $( "#categories-menu" ).hide();
                        
                        var currentCategory = $(this).text(); 
                        switch (currentCategory)
                        {
                        case "Emociones":
                                $( "#set1").show(); 
                                break;
                        case "Trabajo":
                                $( "#set2").show();  
                                break;
                        case "Familia":
                        $( "#set3").show(); 
                                break;
                        case "Ocio":
                                $( "#set4").show(); 
                                break;
                        case "Historia":
                        $( "#set5").show();  
                                break;
                        case "Lugares":
                                $( "#set6").show();  
                                break;       
                        } 
            });
        }//END ONLOAD
        function backHome()
        { 
                $( "#categories-menu" ).show();
                $( "#set1" ).hide();
                $( "#set2" ).hide();
                $( "#set3" ).hide();
                $( "#set4" ).hide();
                $( "#set5" ).hide();
                $( "#set6" ).hide();
                $("#strapline").text("Elije una carta"); 
                $( "#volver" ).hide();
        }