

    $(document).ready(function () {



        //si entra al menu HERRAMIETAS CREDITO MENU muestra la pantalla
        //si entra en el titulo
        $("#Titulo_HerramietnasCredito").mouseover(function myfunction() {
            $("#MostrarHerramientasCredito").addClass("navbar-collapse collapse show");
        });
        //si entra en la pantalla
        $("#MostrarHerramientasCredito").mouseover(function myfunction() {
            $("#MostrarHerramientasCredito").addClass("navbar-collapse collapse show");
        });
        //si sale del ttulo
        $("#MostrarHerramientasCredito").mouseout(function myfunction() {
            $("#MostrarHerramientasCredito").removeClass("navbar-collapse collapse show");
        });
        //si sale de la pantalla
        $("#Titulo_HerramietnasCredito").mouseout(function myfunction() {
            $("#MostrarHerramientasCredito").removeClass("navbar-collapse collapse show");
        });


        //si entra al menu HERRAMIETAS CREDITO MENU muestra la pantalla
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

            //validacion de numero de Guia
            if (Ficha_id == 1) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP03-PR021GR02%20BN%20Soluciones.doc");//cambiar link de Guia

            }

            else if (Ficha_id == 2) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP05-PR021GR02%20BN%20Tarjetas%20de%20Cr%C3%A9dito.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 3) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP02-PR021GR02%20BN%20Veh%C3%ADculos.doc");//cambiar link de Guia
            }


            else if (Ficha_id == 4) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP15-PR021GR02%20BN%20Agricultura.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 5) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP28-PR021GR02%20BN%20Agro%20Industrializaci%C3%B3n%20de%20Ca%C3%B1a%20de%20Az%C3%BAcar.docx");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 6) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP41-PR021GR02%20BN%20Agroexportaci%C3%B3n%20de%20Caf%C3%A9.docx");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 7) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP21-PR021GR02%20BN%20Agroindustria.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 8) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP23-PR021GR02%20BN%20Banano%20Renovaci%C3%B3n%20Plantaciones.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 9) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP32-PR021GR02%20Banca%20de%20Segundo%20Piso.docx");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 10) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP58-PR021GR02%20BN%20Comercializaci%C3%B3n%20de%20Caf%C3%A9.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 11) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP11-PR021GR02%20BN%20Concesi%C3%B3n%20de%20Obra%20P%C3%BAblica.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 12) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP57-PR021GR02%20BN%20Cultivo%20de%20Naranja%20para%20Jugo.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 13) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP31-PR021GR02%20BN%20Cultivo%20de%20Ornamentales.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 14) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP56-PR021GR02%20BN%20Cultivo%20de%20Palmito.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 15) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP54-PR021GR02%20BN%20Energ%C3%ADa.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 16) {
                $("a#cambiarFicha").attr("href", "#Buscador");//cambiar link de Guia         
            }

            else if (Ficha_id == 17) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP10-PR021GR02%20BN%20Extracci%C3%B3n%20de%20Minerales.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 18) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP19-PR021GR02%20BN%20Forestal.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 19) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/:w:/r/sites/procesos/Planificacion_SGC/FP16-PR021GR02%20BN%20Ganader%C3%ADa.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 20) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP25-PR021GR02%20BN%20Garant%C3%ADas%20de%20Participaci%C3%B3n%20y%20Cumplimiento.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 21) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP09-PR021GR02%20BN%20Industria.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 22) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP59-PR021GR02%20BN%20Industria%20y%20Mercadeo%20del%20Arroz.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 23) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP43-PR021GR02%20BN%20Infraestructura%20de%20Obra%20P%C3%BAblica.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 24) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP13-PR021GR02%20BN-Instituciones%20Financieras%20IFI%E2%80%99s.docx");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 25) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP14-PR021GR02%20BN%20Instituciones%20Financieras%20IFI%27s%20(Capital%20de%20Trabajo).doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 26) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP55-PR021GR02%20BN%20Liquidez.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 27) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP60-PR021GR02%20Otros%20Programas%20Agricultura.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 28) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP61-PR21GR02%20BN%20Pesca%20y%20Acuicultura.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 29) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP20-PR021GR02%20BN%20Producci%C3%B3n%20de%20Arroz.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 30) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP22-PR021GR02%20BN%20Producci%C3%B3n%20de%20Caf%C3%A9.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 31) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP27-PR021GR02%20BN%20Producci%C3%B3n%20de%20Ca%C3%B1a%20de%20Az%C3%BAcar.docx");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 32) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP30-PR021GR02%20BN%20Produccion%20de%20Maiz.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 33) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP26-PR021GR02%20BN%20Producci%C3%B3n%20de%20Palma%20Aceitera.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 34) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP40-PR021GR02%20BN-Producci%C3%B3n%20de%20Pi%C3%B1a.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 35) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP07-PR021GR02%20BN%20Transporte.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 36) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP12-PR021GR02%20BN%20Turismo.docx");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 37) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP39-PR021GR02%20BN%20Empleados%20Subsidiarias-%20Vivienda.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 38) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP04-PR021GR02%20BN%20Empleados%20Vivienda.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            else if (Ficha_id == 39) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP01-PR021GR02%20BN%20Vivienda.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");
            }

            //me solicitaron eliminarla
            //else if (Ficha_id == 40) {
            //    $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP08-PR021GR02%20BN%20Construcci%C3%B3n.doc");//cambiar link de Guia
            //    $("#Guiaid").attr("disabled", "disabled");
            //}


            else if (Ficha_id == 41) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/sites/procesos/Planificacion_SGC/FP06-PR021GR02%20BN%20Comercio%20de%20Bienes%20y%20Servicios.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");

            }

            else if (Ficha_id == 42) {
                $("a#cambiarFicha").attr("href", "https://bnficr.sharepoint.com/:w:/r/sites/procesos/Planificacion_SGC/FP08-PR021GR02%20BN%20Construcci%C3%B3n.doc");//cambiar link de Guia
                $("#Guiaid").attr("disabled", "disabled");

            }





            else {
                $("a#cambiarFicha").attr("href", '#Buscador');//cambiar link de Guia
                $("#CambiarTextoFicha").text("No Posee Ficha");
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



            //agregar si tiene guia nada mas
            if (Ficha_id != 1 || Ficha_id != 3 || Ficha_id != 16 /*|| Ficha_id != 39*/) {

                
                $("a#cambiarGuia").attr("href", '#Buscador');//cambiar link de Guia
                $("#CambiarTextoGuia").text("No Posee Guía");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/warningicon.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "orange");

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
            

            if (guia_id == 101) {

                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC001-CGPC01%20Gu%C3%ADa%20Comercial%20BN%20Educaci%C3%B3n.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }
            else if (guia_id == 102) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/:w:/r/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC003-CGPC01%20Gu%C3%ADa%20Comercial%20Cr%C3%A9dito%20Ecol%C3%B3gico.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 

            }

            else if (guia_id == 103) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC004-CGPC01%20Gu%C3%ADa%20Comercial%20BN%20Soluciones%20Salud.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 104) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC007-CGPC01%20Gu%C3%ADa%20Comercial%20BN%20Soluciones%20Cuota%20Unica.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 105) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC009-CGPC01%20BN%20Soluciones%20Gastos%20Personales%20con%20Garant%C3%ADa.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

                //ya no existe
            //else if (guia_id == 106) {
            //    $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC011-CGPC01%20Gu%C3%ADa%20Comercial%20Rapiditos.docx');
            //    $("#CambiarTextoGuia").text("Link");
            //    $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
            //    $("#IconoGuia").css("color", "#33D4FF"); 
            //}

            else if (guia_id == 107) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC005-CGPC01%20Gu%C3%ADa%20Comercial%20BN%20Veh%C3%ADculos.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 108) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC010-CGPC01%20Gu%C3%ADa%20Comercial%20Motos%20Bajo%20Valor.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 109) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC015-CGPC01%20Gu%C3%ADa%20Comercial%20veh%C3%ADculos%20de%20trabajo.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 110) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC006-CGPC01%20Gu%C3%ADa%20Comercial%20CAR.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 111) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC008-CGPC01%20Gu%C3%ADa%20Comercial%20Cr%C3%A9dito%20Emprendedor%20PYME.DOCX');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 112) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC017-CGPC01%20Gu%C3%ADa%20Comercial%20BN%20Pyme%20F%C3%A1cil.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 113) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC018-CGPC01%20BN%20Municipalidades,%20ASADAS%20y%20Asociaciones%20Comunales.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 114) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC012-CGPC01%20Gu%C3%ADa%20Comercial%20Vivienda%20Couta%20Unica.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 115) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC013-CGPC01%20Gu%C3%ADa%20Comercial%20Vivienda%20en%20Desarrollo%20Inmobiliario.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 116) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC014-CGPC01%20Gu%C3%ADa%20Comercial%20Vivienda%20individual.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 117) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC016-CGPC01%20Gu%C3%ADa%20Comercial%20Vivienda%20Inter%C3%A9s%20Social.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }

            else if (guia_id == 118) {
                $("a#cambiarGuia").attr("href", 'https://bnficr.sharepoint.com/sites/procesos/CGCP01%20Planificacin%20Comercial%20Personas/GC019-CGPC01%20BN%20Vivienda%20Sostenible.docx');
                $("#CambiarTextoGuia").text("Link");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/iconoficha2.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "#33D4FF"); 
            }
            

            else {
                //aqui ya no entron por los cambios realizados
                $("a#cambiarGuia").attr("href", '#Buscador');//cambiar link de Guia
                $("#CambiarTextoGuia").text("No Posee Guía");
                $("#IconoGuia").attr("src", '/Content/imagenes/Buscador/warningicon.png');//cambiar ICONO 
                $("#IconoGuia").css("color", "orange");


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




function mostrar() {

    $("#mostrar2").show();
    var Ficha_id = $("#Fichaid").val();
    var guia_id = $("#Guiaid").val();
    var Productoid = $("#Productoid").val();

    
    
    //alert("LA FICHA ES: " + Ficha_id + "<BR> Y LA GUIA ES: " + guia_id);
    if (Ficha_id != '' && guia_id != '') {

        if ((Ficha_id == 1 || Ficha_id == 3 || Ficha_id == 16 /*|| Ficha_id == 39*/) && guia_id == 999) {

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
    } else {

        Swal.fire({
            icon: 'warning',
            title: 'Falta Información...',
            html: 'Seleccione una <b>Guia Comercial</b> de la lista',
            //footer: '<a href>Why do I have this issue?</a>'
        });
    }
    
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
