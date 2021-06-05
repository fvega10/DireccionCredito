using System.Web;
using System.Web.Optimization;

namespace DireccionCredito
{
    public class BundleConfig
    {
        
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/popper.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/smooth").Include(
          "~/Scripts/smooth-scroll.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/Pooper").Include(
                      "~/Scripts/bootstrap.js"));
                        
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            //script para Buscador Varios
            bundles.Add(new ScriptBundle("~/bundles/VariosBuscador").Include(
                      "~/Scripts/Buscador/VariasJS4.js"));

            //para SweetAlert
            bundles.Add(new ScriptBundle("~/bundles/SweetAlert/js").Include(
                      "~/Content/SweetAlert2/sweetalert2.all.js"));

            bundles.Add(new ScriptBundle("~/bundles/promiseuno").Include(
                      "~/Content/PromiseFix/es6-promise.js"));

            bundles.Add(new ScriptBundle("~/bundles/promisedos").Include(
                      "~/Content/PromiseFix/es6-promise.auto.js"));

            //togles
            bundles.Add(new ScriptBundle("~/bundles/Bootstraptoogle").Include(
                      "~/Content/bootstraptoggle/bootstrap4-toggle.min.js"));



            bundles.Add(new ScriptBundle("~/bundles/scriptsInicio").Include(

                //correr MDBOOTSTRAP
                "~/Scripts/inicio/jquery.min.js",
                 "~/Scripts/inicio/popper.min.js",
                 "~/Scripts/inicio/bootstrap.min.js",
                 "~/Scripts/inicio/mdb.min.js",
                 "~/Scripts/smooth-scroll.min.js", //scroll mouse
                 "~/Scripts/inicio/portafolio/jquery.cubeportfolio.min.js", //portafolio 1
                 "~/Scripts/inicio/portafolio/portfolio-3-col.min.js"//portafolio 2
                ));


            //correr javascripts para secciones Calendario-
            bundles.Add(new ScriptBundle("~/bundles/scriptsSecciones").Include(

               //correr MDBOOTSTRAP
               "~/Scripts/inicio/jquery.min.js",
                "~/Scripts/inicio/popper.min.js",
                "~/Scripts/inicio/bootstrap.min.js",
                "~/Scripts/inicio/mdb.min.js",
                "~/Scripts/smooth-scroll.min.js", //scroll mouse
                "~/Content/Calendario/script/aos.js" //scroll mouse
                
               ));



            bundles.Add(new StyleBundle("~/Content/NuevaBuscador").Include(
                "~/Content/fontawesome-all.min.css", //css font awesome                
                "~/Content/EstilosJosue.css",
                "~/Content/BotonBuscarCSS.css",
                "~/Content/SweetAlert2/sweetalert2.css", //para el SweetAlert2
                "~/Content/Hexagono/FontGoogleapis.css", //hexagono   hexagons.css
                "~/Content/Hexagono/hexagons.css",//hexagono
                "~/Content/ImageHover/imagehover.css",//hexagono
                "~/Content/ImageHover/demo-page.css",//hexagono
                "~/Content/bootstraptoggle/bootstrap4-toggle.min.css"//EstiloMenuDropDownList.css
                ));




            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/fontawesome-all.min.css", //css font awesome                
                "~/Content/bootstrap.css",                      
                "~/Content/EstilosJosue.css",
                "~/Content/BotonBuscarCSS.css",
                "~/Content/SweetAlert2/sweetalert2.css", //para el SweetAlert2
                "~/Content/Hexagono/FontGoogleapis.css", //hexagono   hexagons.css
                "~/Content/Hexagono/hexagons.css",//hexagono
                "~/Content/ImageHover/imagehover.css",//hexagono
                "~/Content/ImageHover/demo-page.css",//hexagono
                "~/Content/EstiloMenuDropDownList.css",//EstiloMenuDropDownList.css
                "~/Content/bootstraptoggle/bootstrap4-toggle.min.css",//EstiloMenuDropDownList.css
                "~/Content/site.css"));


            //estilos de inicio
            bundles.Add(new StyleBundle("~/Content/css_inicio").Include(

               "~/Content/fontawesome-all.min.css", //css font awesome    
               "~/Content/Inicio/css/Roboto.css", //css font awesome    
               "~/Content/Inicio/css/bootstrap.min.css", //css font awesome    
               "~/Content/Inicio/css/mdb.min.css", //css font awesome    
               "~/Content/Inicio/css/style.css", //css font awesome  
               
                "~/Content/bootstraptoggle/bootstrap4-toggle.min.css",//EstiloMenuDropDownList.css
               "~/Content/FuentesGoogle/Poppins.css",//fuente google Poppins
                "~/Content/FuentesGoogle/Roboto.css",//fuente google Roboto
                "~/Content/AnimateCSS/animate.css",//fuente animaciones
                "~/Content/Inicio/portafolio/cubeportfolio.min.css",//portaflio 1
                "~/Content/Inicio/portafolio/global.css",//portaflio 2
                "~/Content/Inicio/portafolio/stylePortafolio.css",//portaflio 3
                 "~/Content/Calendario/css/fontGoogle.css",//para menu inicial
               "~/Content/Calendario/css/style.css",////para menu inicial
               "~/Content/Calendario/css/style_icomoon.css"//icono de menu inicial

                 ));



            //estilos de Secciones: Calendario
            bundles.Add(new StyleBundle("~/Content/css_Secciones").Include(

               "~/Content/fontawesome-all.min.css", //css font awesome    
               "~/Content/Inicio/css/bootstrap.min.css", //css font awesome    
               "~/Content/Inicio/css/mdb.min.css", //css font awesome    
               "~/Content/bootstraptoggle/bootstrap4-toggle.min.css",//EstiloMenuDropDownList.css
               "~/Content/AnimateCSS/animate.css",//fuente animaciones
               "~/Content/Calendario/css/fontGoogle.css",//
               "~/Content/Calendario/css/style.css",////para menu inicial
               "~/Content/Calendario/css/style_icomoon.css",//icono de menu inicial
                "~/Content/SweetAlert2/sweetalert2.all.js", //sweet alert
                "~/Content/Inicio/css/style.css"//trae fragmentos del Footer


                 ));




        }
    }
}

    