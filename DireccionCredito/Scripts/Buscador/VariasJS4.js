

    $(document).ready(function () {



        //si entra al menu HERRAMIETAS CREDITO MENU muestra la pantalla
        //si entra en el titulo
        $("#Submenu_Herramientas_Credito").mouseover(function myfunction() {
            $("#MostrarHerramientasCredito").addClass("navbar-collapse collapse show");
        });
        //si entra en la pantalla
        $("#MostrarHerramientasCredito").mouseover(function myfunction() {
            $("#MostrarHerramientasCredito").addClass("navbar-collapse collapse show");
        });
        //si sale del titulo
        $("#MostrarHerramientasCredito").mouseout(function myfunction() {
            $("#MostrarHerramientasCredito").removeClass("navbar-collapse collapse show");
        });
        //si sale de la pantalla
        $("#Submenu_Herramientas_Credito").mouseout(function myfunction() {
            $("#MostrarHerramientasCredito").removeClass("navbar-collapse collapse show");
        });


        //si entra al menu COMUNICADOS muestra la pantalla
        //si entra en el titulo
        $("#Titulo_Comunicados").mouseover(function myfunction() {
            $("#MostrarHerramientasComunicados").addClass("navbar-collapse collapse show");
        });

        //si entra en la pantalla
        $("#MostrarHerramientasComunicados").mouseover(function myfunction() {
            $("#MostrarHerramientasComunicados").addClass("navbar-collapse collapse show");
        });

        //si sale de la pantalla
        $("#Titulo_Comunicados").mouseout(function myfunction() {
            $("#MostrarHerramientasComunicados").removeClass("navbar-collapse collapse show");
        });


        //si sale del ttulo
        $("#MostrarHerramientasComunicados").mouseout(function myfunction() {
            $("#MostrarHerramientasComunicados").removeClass("navbar-collapse collapse show");
        });
        





        //primera funcion

        $("#Productoid").change(function () {


            $("#Guiaid").removeAttr("disabled");//habilitar la Guia Comercial



            //OCULTAR DIV
            $("#primerDiv").hide(); //ocultar el div de ficha del producto y guia
            $("#ModuloAtencionPrincipal").hide(); //ocultar el div de modulo de atencion
            $("#ModuloAtencion").hide(); //ocultar el div de modulo de GESTION DEL PROCESO
            apagarbotones();//APAGAR LOS BOTONES DE MODULO DE ATENCION
            
            var productoid = $(this).val();
            //alert("El valor del Producto es: " + productoid); mensaje de alerta
            debugger
            $.ajax({
                type: "post",
                url: "/Home/ObtenerFicha?Productoid=" + productoid,
                contentType: "html",
                success: function (response) {
                    debugger
                    $("#Fichaid").empty();
                    $("#Fichaid").append(response);
                }
            })
            
         })


       


            //Segunda funcion
        $("#Fichaid").change(function () {

            
            

            $("#Guiaid").removeAttr("disabled");//habilitar la Guia Comercial
            //captura de valor seleccionado
            var Ficha_id = $("#Fichaid").val();

            GetFichas();
            

            //agregar si tiene guia nada mas
            if (Ficha_id != 1 && Ficha_id != 16) {
                $("#Guiaid").attr("disabled", "disabled");
                $("a#cambiarGuia").attr("href", '#Buscador');//cambiar link de Guia
                $("#CambiarTextoGuia").text("No Posee Guía");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/warningicon.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "orange");
            }

            

            //cambiar el txto cuando el # 16 lo cambia
            if (Ficha_id == 16) {
                $("#CambiarTextoFicha").text("No Posee Ficha");
                $("#IconoFicha").attr("src", '/Content/imagenes/Buscador/warningicon.png');//cambiar ICONO 
                $("#IconoFicha").css("color", "orange");
            } else {

                //alert("LA FICHA ES :" + Ficha_id); //COMPROBAR NUMERO DE FICHA ID
                $("#CambiarTextoFicha").text("Link");
                $("#IconoFicha").attr('src', '/Content/imagenes/Buscador/iconoFicha.png');//cambiar ICONO 
                $("#IconoFicha").css("color", "#33D4FF");
            }


            //OCULTAR DIVS
            $("#primerDiv").hide(); //ocultar el div de ficha del producto y guia
            $("#ModuloAtencionPrincipal").hide(); //ocultar el div de modulo de atencion
            $("#ModuloAtencion").hide(); //ocultar el div de modulo de GESTION DEL PROCESO
            apagarbotones();//APAGAR LOS BOTONES DE MODULO DE ATENCION

            
            var Fichaid = $(this).val();
            
            //alert("El valor del Producto es: " + Fichaid);  //mensaje de alerta
            debugger
            $.ajax({
                type: "post",
                url: "/Home/ObtenerGuia?Fichaid=" + Fichaid,
                contentType: "html",
                success: function (response) {
                    debugger
                    $("#Guiaid").empty();
                    $("#Guiaid").append(response);
                }
            })
        })


//Tercera funcion

        $("#Guiaid").change(function () {
            
            var guia_id = $("#Guiaid").val();
            //alert("EL DATO DE LA GUIA ES :" + guia_id)

            GetGuias();

            if (guia_id == 101 || 102 || 103 || 104 || 105 || 107 || 108 || 109 || 110 || 111 || 112 || 113 || 114 || 115 || 116 || 117 || 118) {
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF");
            }   
            
            //OCULTAR DIVS
            $("#primerDiv").hide(); //ocultar el div de ficha del producto y guia
            $("#ModuloAtencionPrincipal").hide(); //ocultar el div de modulo de atencion
            $("#ModuloAtencion").hide(); //ocultar el div de modulo de GESTION DEL PROCESO
            apagarbotones();//APAGAR LOS BOTONES DE MODULO DE ATENCION


    })

        
        
    /*read para el dropdown list*/


        $('body').on('mouseenter mouseleave', '.dropdown-hover', function (e) {
            let dropdown = $(e.target).closest('.dropdown-hover');
            dropdown.addClass('show');

            setTimeout(function () {
                dropdown[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 300);
        });

        /* fin del dropdownlist */


        //ESCUCHAR ULTIMOS BOTONES DEL MODULO DE ATENCION
        //CAMBIOS EN LOS BOTONES DE ModuloAtencion

        //SELECCION DE TIPO DE COLOCACION

        $("#Otorgamiento").change(function () {
            $("#ModuloAtencion").hide();
            apagarbotonesGarantias();


        })
        $("#Recuperacion").change(function () {
            $("#ModuloAtencion").hide();
            apagarbotonesGarantias();
        })
        
        //SELECCION DE GARANTIA
        $("#BacktoBack").change(function () {
            $("#ModuloAtencion").hide();
        })
        $("#ContratoCredito").change(function () {
            $("#ModuloAtencion").hide();
        })
        $("#Fiduciaria").change(function () {
            $("#ModuloAtencion").hide();

        })
        $("#Hipotecaria").change(function () {
            $("#ModuloAtencion").hide();
        })
        $("#Mobiliaria").change(function () {
            $("#ModuloAtencion").hide();
        })
        $("#Pagare").change(function () {
            $("#ModuloAtencion").hide();
        })
        $("#Prendaria").change(function () {
            $("#ModuloAtencion").hide();
        })








        

        
        
        

})//DENTRO DE READ PARA ESCUCHAR FUNCION CHANGE




    //FIN dependencia del DropDownList-- >

    // efecto ocultar *@


    function Ocultar() {
        $("#primerDiv").hide();

    }

//trae la lista de productos y su link del modelo y se pasa a un evento onchange del tag del select en el html
function GetFichas() {
    var IdFicha = $("#Fichaid").val();
    $.ajax({
        type: "get",
        url: "/Home/ObtenerFichas?fichaid=" + IdFicha,
        contentType: "html",
        dataType: "json",
        success:
            //si es correcto
            function (data) { //inicio de no borrar
                /*$("#Fichaid").empty(); //Vaciar el ComboBox*/
                $.each(data, function (index, row) {
                    /*$("#Fichaid").append("<option value='" + row.Value + "'>" + row.Text + "</option>")*/                   
                    $("a#cambiarFicha").attr("href", row.Value);                    
                });
            }
    });
}

//trae la lista de guìas comerciales y su link del modelo y se pasa a un evento onchange del tag del select en el html
function GetGuias() {
    var IdGuia = $("#Guiaid").val();
    $.ajax({
        type: "get",
        url: "/Home/ObtenerGuias?guiaid=" + IdGuia,
        contentType: "html",
        dataType: "json",
        success:
            //si es correcto
            function (data) { //inicio de no borrar
                /*$("#Fichaid").empty(); //Vaciar el ComboBox*/
                $.each(data, function (index, row) {
                    /*$("#Fichaid").append("<option value='" + row.Value + "'>" + row.Text + "</option>")*/
                    $("a#cambiarGuia").attr("href", row.Value);
                });
            }
    });
}


function mostrar() {

    $("#mostrar2").show();
    var Ficha_id = $("#Fichaid").val();
    var guia_id = $("#Guiaid").val();
    var Productoid = $("#Productoid").val();

    
    
    //alert("LA FICHA ES: " + Ficha_id + "<BR> Y LA GUIA ES: " + guia_id);
    if (Ficha_id != '' /*&& guia_id != ''*/) {

        if ((Ficha_id == 1 || Ficha_id == 16 /*|| Ficha_id == 39*/) && (guia_id == 999 || guia_id == '')) {

            Swal.fire({
                icon: 'warning',
                title: 'Falta Información...',
                html: 'Seleccione una <b>Guia Comercial</b> de la lista',
                //footer: '<a href>Why do I have this issue?</a>'
            });

        } else {

        
            $("#primerDiv").show();
            $("#ModuloAtencionPrincipal").show();


            //activar todos los botones de las garantias para hacer el filtro

            $('#Mobiliaria').bootstrapToggle('enable');
            $('#ContratoCredito').bootstrapToggle('enable');
            $('#Pagare').bootstrapToggle('enable');
            $('#Prendaria').bootstrapToggle('enable');


            //var producto = $("#Productoid").val;

            if ($("#Productoid").val() == 1) {

                //si producto seleccionado es Consumo
                $('#Mobiliaria').bootstrapToggle('disable');

            } else if ($("#Productoid").val() == 2) {

                $('#ContratoCredito').bootstrapToggle('disable');


            
            } else if ($("#Productoid").val() == 3) {


                $('#Mobiliaria').bootstrapToggle('disable');
                $('#ContratoCredito').bootstrapToggle('disable');
                $('#Pagare').bootstrapToggle('disable');
                $('#Prendaria').bootstrapToggle('disable');

        

            } else if ($("#Productoid").val() == 4) {

                $('#Mobiliaria').bootstrapToggle('disable');


            }//fin
            







        ////////////////////////////////////////////////
        var hash = "#BtnMostrarGuia"; //LUGAR DE LA PAGINA PARA IR

        $('html, body').animate({
            scrollTop: $(hash).offset().top-50 //ALTERAR OFFSET
        }, 1200, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash.offset;
            });
        
        }
        
    } else if (Productoid == 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Falta Información...',
            html: 'Seleccione un <b>Producto</b> de la lista',
            //footer: '<a href>Why do I have this issue?</a>'
        });

    }else if (Ficha_id == '') {

        var Actividad = "<b>Actividad</b>";
        Swal.fire({
            icon: 'warning',
            title: 'Falta Información...',
            html: 'Seleccione una <b>Actividad</b> de la lista',
            //footer: '<a href>Why do I have this issue?</a>'
        });

        //alert("LA FICHA ES: " + Ficha_id + "<BR> Y LA GUIA ES: " + guia_id);
    } /*else {

        Swal.fire({
            icon: 'warning',
            title: 'Falta Información...',
            html: 'Seleccione una <b>Guia Comercial</b> de la lista',
            //footer: '<a href>Why do I have this issue?</a>'
        });
    }*/
    
    }
   
//fin funcion MOSTRAR



function mostrarModuloAtencion() {





    //ocultar todos los modulos////////
    //OTORGAMIENTO SIN AVALUO
    $("#OTentrevistaNoAvaluo").hide();
    $("#OTestructuracionNoAvaluo").hide();
    $("#OTanalisisNoAvaluo").hide();
    $("#OTPolizaNoAvaluo").hide();//cambio el nombre a Fonrmalizacion desembolso
    

    //OTORGAMIENTO CON AVALUO
    $("#OTentrevista").hide();
    $("#OTestructuracion").hide();
    $("#OTAvaluo").hide();
    $("#OTanalisis").hide();
    $("#OTPoliza").hide();//cambio el nombre a Fonrmalizacion desembolso
    

    ///ESCONDE LOS OTROS MODULOS RECUPERACION
    $("#REEntrevista").hide();
    $("#REEstructuracion").hide();
    $("#REResolucion").hide();
    $("#REFormalizacion").hide();


    //reinicio de variables para la base de datos
    var garantiasseleccionadas = ""; //dato para la base de registro de visitas
    var Tipo = ""; //dato para la base de registro de visitas




    if ($("#Otorgamiento").prop('checked') == true)
    //seleccionado Otorgamiento
    {
        Tipo = "Otorgamiento";
        //VALIDACION QUE SELECCIONO ALGUNA GARANTIA

        var selecionada = 0;
        

        if ($("#BacktoBack").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - BacktoBack";
        }

        if ($("#ContratoCredito").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - ContratoCredito";
        }
        if ($("#Fiduciaria").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - Fiduciaria";

        }
        if ($("#Hipotecaria").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - Hipotecaria";
        }
        if ($("#Mobiliaria").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - Mobiliaria";
        }
        if ($("#Pagare").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - Pagare";
        }
        if ($("#Prendaria").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - Prendaria";
        }


        





        if (selecionada == 1) {
            //si seleccionó alguna garantia:

            var avaluo;
            if ($("#Hipotecaria").prop('checked') == true) {
                avaluo = 1
            }

            if ($("#Prendaria").prop('checked') == true) {
                avaluo = 1
            }


            //se marco hipotecario o prendaria
            if (avaluo==1) {

                $("#OTentrevista").show();
                $("#OTestructuracion").show();
                $("#OTAvaluo").show();
                $("#OTanalisis").show();
                $("#OTPoliza").show(); //cambio el nombre a Fonrmalizacion desembolso
                

                ///ESCONDE LOS OTROS MODULOS

               

            } else {



                $("#OTentrevistaNoAvaluo").show();
                $("#OTestructuracionNoAvaluo").show();                
                $("#OTanalisisNoAvaluo").show();
                $("#OTPolizaNoAvaluo").show();
                



            }

            //mostrar modulo
            $("#ModuloAtencion").show();


            //FUNCION PARA DESPLAZAR
            var hash = "#ModuloAtencion"; //LUGAR DE LA PAGINA PARA IR

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });


            //guardar para otorgamiento en la base de datos
            GuardarVisita(Tipo, garantiasseleccionadas);


        } else {
            //de lo contrario digite alguna garantia
            Swal.fire({
                icon: 'warning',
                title: 'Falta Información...',
                html: 'Seleccione un <b>Una Garantía</b> de las opciones',
                //footer: '<a href>Why do I have this issue?</a>'
            });
        }


    }else if ($("#Recuperacion").prop('checked') == true)

    {

        Tipo = "Recuperacion";

        //seleccionado Recuperacion

        //VALIDACION QUE SELECCIONO ALGUNA GARANTIA

        var selecionada = 0;

        if ($("#BacktoBack").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - BacktoBack";
        }

        if ($("#ContratoCredito").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - ContratoCredito";
        }
        if ($("#Fiduciaria").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - Fiduciaria";
        }
        if ($("#Hipotecaria").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - Hipotecaria";
        }
        if ($("#Mobiliaria").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - Mobiliaria";
        }
        if ($("#Pagare").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - Pagare";
        }
        if ($("#Prendaria").prop('checked') == true) {
            selecionada = 1;
            garantiasseleccionadas = garantiasseleccionadas + " - Prendaria";
        }


        if (selecionada == 1) {
            //si seleccionó alguna haga esto

            $("#REEntrevista").show();
            $("#REEstructuracion").show();
            $("#REResolucion").show();
            $("#REFormalizacion").show();

            ///ESCONDE LOS OTROS MODULOS
            $("#OTentrevista").hide();
            $("#OTestructuracion").hide();
            $("#OTAvaluo").hide();
            $("#OTanalisis").hide();
            $("#OTPoliza").hide();//cambio el nombre a Fonrmalizacion desembolso
            

            //mostar modulo
            $("#ModuloAtencion").show();

            //FUNCION PARA DESPLAZAR
            var hash = "#ModuloAtencion"; //LUGAR DE LA PAGINA PARA IR
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });


            //funcion para mandar todos los datos a la base de Visitas- Registro
            GuardarVisita(Tipo, garantiasseleccionadas);





        } else if (selecionada == 0) {

            Swal.fire({
                icon: 'warning',
                title: 'Falta Información...',
                html: 'Seleccione un <b>Una Garantía</b> de las opciones',
                //footer: '<a href>Why do I have this issue?</a>'
            });

        }
    }else {

            //si no marco algun tipo de colocacion entonces decirle que tiene que seleccionar

        Swal.fire({
            icon: 'warning',
            title: 'Falta Información...',
            html: 'Seleccione un <b>Tipo Colocacion</b> de las 2 opciones',
            //footer: '<a href>Why do I have this issue?</a>'
        });

    }
}

// fin de mostrarModuloAtencion()*******************************


//ir a un lugar en especifico con jquery
function SmoothInicio() {
    
    var hash = "#Buscador"; //LUGAR DE LA PAGINA PARA IR

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1200, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
    });

}



//FUNCION PARA APAGAR BOTONES A LA HORA DE OCULAR EL DIV

function apagarbotones() {

    $('#Recuperacion').bootstrapToggle('off', true);
    $('#Otorgamiento').bootstrapToggle('off', true);
    $('#BacktoBack').bootstrapToggle('off', true);
    $('#ContratoCredito').bootstrapToggle('off', true);
    $('#Fiduciaria').bootstrapToggle('off', true);
    $('#Hipotecaria').bootstrapToggle('off', true);
    $('#Mobiliaria').bootstrapToggle('off', true);
    $('#Pagare').bootstrapToggle('off', true);
    $('#Prendaria').bootstrapToggle('off', true);





}


function apagarbotonesGarantias() {

    
    $('#BacktoBack').bootstrapToggle('off', true);
    $('#ContratoCredito').bootstrapToggle('off', true);
    $('#Fiduciaria').bootstrapToggle('off', true);
    $('#Hipotecaria').bootstrapToggle('off', true);
    $('#Mobiliaria').bootstrapToggle('off', true);
    $('#Pagare').bootstrapToggle('off', true);
    $('#Prendaria').bootstrapToggle('off', true);





}


//FUNCION GUADAR REGISTRO VISITA

function GuardarVisita(dato1,dato2) {
       
    //procedimiento se carga en el boton de Modulo de atencion para guardar los datos finales

    $.ajax({
        type: "POST",        
        url: "GuardarRegistroVisita",
        data: JSON.stringify({
            UsuarioWindowsE: $("#UsuarioWindos").text(),
            EmailE: $("#Email").text(),
            NombreCompletoE: $("#NombreCompleto").text(),
            EmpleadoE: $("#Empleado").text(),
            NombreE: $("#Nombre").text(),
            ApellidosE: $("#Apellidos").text(),
            OficinaE: $("#Oficina").text(),
            PicE: $("#PIC").text(),
            ProductoBuscadoE: $("#Productoid option:selected").text(),
            ActividadE: $("#Fichaid option:selected").text(),
            GuiaComercialE: $("#Guiaid option:selected").text(),
            TipoE: dato1,
            GarantíaE: dato2,
            
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
       
    });
    
}
