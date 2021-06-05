using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.DirectoryServices;
using System.DirectoryServices.ActiveDirectory;
using System.IO;
using System.Drawing;
using Microsoft.AspNet.Identity;
using System.Security.Claims;
using DireccionCredito.Models;
using System.Web.Services;
using DireccionCredito.Models.MatrizSeguimiento;
using System.Data.SqlClient;

namespace DireccionCredito.Controllers
{



    public class HomeController : Controller
    {
        //inicio propiedades de usuario
        public string archivo64;
        public string NombreUsuario;
        public string userPrincipalName;
        public string sAMAccountName;
        public string initials;
        public string Given_Name;
        public string sn;
        public string mail;
        public string mobile;
        public string telephoneNumber;
        public string streetAddress;
        public string postalCode;
        public string Location;
        public string Phone;
        public string Department;


        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            return View();
        }

        public ActionResult Inicio()
        {
            //CargaDatosUsuario();
            return View();
        }

        public ActionResult Calendario()
        {
            DateTime FEBRERO = Convert.ToDateTime("2020-02-21");
            DateTime MARZO = Convert.ToDateTime("2020-03-13");
            DateTime ABRIL = Convert.ToDateTime("2020-04-17");
            DateTime MAYO = Convert.ToDateTime("2020-05-15");
            DateTime JUNIO = Convert.ToDateTime("2020-06-12");
            DateTime JULIO = Convert.ToDateTime("2020-07-17");
            DateTime AGOSTO = Convert.ToDateTime("2020-08-14");
            DateTime SEPTIEMBRE = Convert.ToDateTime("2020-09-21");
            DateTime OCTUBRE = Convert.ToDateTime("2020-10-19");
            DateTime NOVIEMBRE = Convert.ToDateTime("2020-11-13");
            DateTime DICIEMBRE = Convert.ToDateTime("2020-12-18");

            CreditoNacionalEntities bd = new CreditoNacionalEntities();
            DateTime Actual = bd.Database.SqlQuery<DateTime>("SELECT GETDATE()").SingleOrDefault();


            if (Actual > FEBRERO)
            {
                ViewBag.FEBRERO = "display:none";
                ViewBag.FEBREROBTN = "disabled";
            }

            if (Actual > MARZO)
            {
                ViewBag.MARZO = "display:none";
                ViewBag.MARZOBTN = "disabled";
            }

            if (Actual > ABRIL)
            {
                ViewBag.ABRIL = "display:none";
                ViewBag.ABRILBTN = "disabled";
            }

            if (Actual > MAYO)
            {
                ViewBag.MAYO = "display:none";
                ViewBag.MAYOBTN = "disabled";
            }

            if (Actual > JUNIO)
            {
                ViewBag.JUNIO = "display:none";
                ViewBag.JUNIOBTN = "disabled";
            }

            if (Actual > JULIO)
            {
                ViewBag.JULIO = "display:none";
                ViewBag.JULIOBTN = "disabled";
            }

            if (Actual > AGOSTO)
            {
                ViewBag.AGOSTO = "display:none";
                ViewBag.AGOSTOBTN = "disabled";
            }

            if (Actual > SEPTIEMBRE)
            {
                ViewBag.SEPTIEMBRE = "display:none";
                ViewBag.SEPTIEMBREBTN = "disabled";
            }

            if (Actual > OCTUBRE)
            {
                ViewBag.OCTUBRE = "display:none";
                ViewBag.OCTUBREBTN = "disabled";
            }

            if (Actual > NOVIEMBRE)
            {
                ViewBag.NOVIEMBRE = "display:none";
                ViewBag.NOVIEMBREBTN = "disabled";
            }

            if (Actual > DICIEMBRE)
            {
                ViewBag.DICIEMBRE = "display:none";
                ViewBag.DICIEMBREBTN = "disabled";
            }

            return View();

        }

        public ActionResult Noticias()
        {
            return View();
        }

        public ActionResult Estadisticas()
        {
            return View();
        }

        public ActionResult PreguntasFrecuentes()
        {
            return View();
        }


        //procedimientos Matriz Seguimiento

        //consulta inicial
        public ActionResult MatrizSeguimiento()
        {           

            using (POCEntities bd = new POCEntities())
            {
                //lista de oficinas
                ViewBag.Agencias = bd.Repositorio_AgenciasBNCR.ToList();
            }

            return View();

        }

        public PartialViewResult GestionClienteMatrizSeguimiento(string Txt_Cedula, string IdOficina)
        {
            //llevar Oficina
            ViewBag.IdOficina = IdOficina;


            //Cargar Cedula con Guiones
            ViewBag.CedulaCliente = Txt_Cedula;

            //eliminar para comparar -
            string Txt_CedulaSinGuion = Txt_Cedula.Replace("-", "");
            //castring de cedula
            long CedulaInt = Convert.ToInt64(Txt_CedulaSinGuion);


            using (POCEntities bd = new POCEntities())
            {
                //buscar dato del cliente
                try
                {
                    ViewBag.NombreCliente = bd.Repositorio_ClientesJuridicos.Where(x => x.CLI_IDENTIFICACION == Txt_Cedula).FirstOrDefault().CFI_NOMBRE;
                }
                catch {
                    ViewBag.NombreCliente = "No Registra";
                }
                //validar la cedula en Tabla Control y sacar numero de registros                
                CONTROL Contador = bd.CONTROL.Where(x => x.numCLIENTE == CedulaInt).FirstOrDefault();
                int? QPermitidas = 1;
                if (Contador != null)
                {
                    QPermitidas = Contador.intQ;
                }

                //validar Q de registros x usuario en transacciones
                int QRegistrosTRX = bd.TRX.Where(x => x.numCLIENTE == CedulaInt).Count();

                if (QRegistrosTRX < QPermitidas)
                {
                    //Continua
                    ViewBag.MostrarFormulario = "True";
                    //lista de oficinas
                    ViewBag.Agencias = bd.Repositorio_AgenciasBNCR.ToList();
                    //Lista  Experiencia en la actividad
                    ViewBag.ExperienciaActividad = bd.ctEXPERIENCIAS.ToList();
                    //Lista  Clasificación del Rating BN: 
                    ViewBag.ClasificacionRating = bd.ctRATINGS.ToList();
                    //Lista  AccionesCovid: 
                    ViewBag.AccionesCovid = bd.ctACCIONES.ToList();
                    //Lista  Comportamiento del Sector
                    ViewBag.ComportamientoSector = bd.ctSECTORES.ToList();
                    //Lista  Capacidad paGO
                    ViewBag.CapacidadPago = bd.ctNCPS.Where(x => x.btHAB == true).ToList();
                    //Lista  Flujo de Caja
                    ViewBag.FlujoCaja = bd.ctFLUJOS_CAJA.ToList();

                    return PartialView("Parciales/MatrizSeguimiento/_GestionClienteMatrizSeguimiento");

                }
                else {

                    ViewBag.Resultado = bd.TRX.Where(x => x.numCLIENTE == CedulaInt && x.btHAB == true).ToList();
                    return PartialView("Parciales/MatrizSeguimiento/_MatrizSeguimiento_ResultadoGuardado");
                }
            }


        }


        //Guardar Datos

        public PartialViewResult GuardarMatrizSeguimiento(string Txt_Cedula1,
            string IdOficina,
            string Txt_ExperienciaActividad,
            string Txt_ClasificacionRating,
            string Txt_AccionesCovid,
            string Txt_ComportamientoSector,
            string Txt_CapacidadPago,
            string Txt_FlujoCaja
            )

        {


            long Txt_CedulaE = Convert.ToInt64(Txt_Cedula1.Replace("-", ""));
            int IdOficinaE = Convert.ToInt32(IdOficina);


            int Txt_ExperienciaActividadE = Convert.ToInt32(Txt_ExperienciaActividad); ;
            int Txt_ClasificacionRatingE = Convert.ToInt32(Txt_ClasificacionRating);
            int Txt_AccionesCovidE = Convert.ToInt32(Txt_AccionesCovid);
            int Txt_ComportamientoSectorE = Convert.ToInt32(Txt_ComportamientoSector);
            int Txt_CapacidadPagoE = Convert.ToInt32(Txt_CapacidadPago);
            int Txt_FlujoCajaE = Convert.ToInt32(Txt_FlujoCaja);

            using (POCEntities bd = new POCEntities())
            {
                //fecha servidor
                DateTime FechaServidor = bd.Database.SqlQuery<DateTime>("select GETDATE() ").FirstOrDefault();

                ResultadoMatriz Resultado = bd.Database.SqlQuery<ResultadoMatriz>("EXEC dbo.PROC_PRORROGA_EMPRESAS @1,@2,@3,@4,@5,@6"
                    , new SqlParameter("@1", Txt_ExperienciaActividad)
                    , new SqlParameter("@2", Txt_ClasificacionRating)
                    , new SqlParameter("@3", Txt_AccionesCovid)
                    , new SqlParameter("@4", Txt_ComportamientoSector)
                    , new SqlParameter("@5", Txt_CapacidadPago)
                    , new SqlParameter("@6", Txt_FlujoCaja)
                    ).FirstOrDefault();

                ViewBag.Resultado = Resultado;





                //guardar el registro en base

                TRX NuevoRegistro = new TRX
                {
                    numCLIENTE = Txt_CedulaE,
                    dtFECHA_APLICACION = FechaServidor,
                    intOFICINA = IdOficinaE,
                    strUSUARIO = User.Identity.Name,
                    btHAB = true,
                    intEXPERIENCIA = Txt_ExperienciaActividadE,
                    intRATING = Txt_ClasificacionRatingE,
                    intACCIONES = Txt_AccionesCovidE,
                    intSECTOR = Txt_ComportamientoSectorE,
                    intNCP = Txt_CapacidadPagoE,
                    intFLUJO_CAJA = Txt_FlujoCajaE,
                    intRESULTADO = Resultado.IntRESULTADO,
                    strRESULTADO = Resultado.StrRESULTADO
                };

                bd.TRX.Add(NuevoRegistro);
                bd.SaveChanges();

                ViewBag.Consecutivo = bd.TRX.Where(x => x.dtFECHA_APLICACION == NuevoRegistro.dtFECHA_APLICACION && x.numCLIENTE == NuevoRegistro.numCLIENTE).FirstOrDefault().intTRX;
                ViewBag.Fecha = FechaServidor;


            }

            return PartialView("Parciales/MatrizSeguimiento/_GuardarMatrizSeguimiento");
        }

        [HttpPost]
        public PartialViewResult MostrarFormularioConsulta(string Indice, string CedulaGuiones) {

            int IndiceE = Convert.ToInt32(Indice);

            using (POCEntities bd = new POCEntities())
            {
                //lista de oficinas
                ViewBag.Agencias = bd.Repositorio_AgenciasBNCR.ToList();
                //Lista  Experiencia en la actividad
                ViewBag.ExperienciaActividad = bd.ctEXPERIENCIAS.ToList();
                //Lista  Clasificación del Rating BN: 
                ViewBag.ClasificacionRating = bd.ctRATINGS.ToList();
                //Lista  AccionesCovid: 
                ViewBag.AccionesCovid = bd.ctACCIONES.ToList();
                //Lista  Comportamiento del Sector
                ViewBag.ComportamientoSector = bd.ctSECTORES.ToList();
                //Lista  Capacidad paGO
                ViewBag.CapacidadPago = bd.ctNCPS.Where(x => x.btHAB == true).ToList();
                //Lista  Flujo de Caja
                ViewBag.FlujoCaja = bd.ctFLUJOS_CAJA.ToList();
                

                ViewBag.Resultado = bd.TRX.Where(x => x.intTRX == IndiceE).FirstOrDefault();
                //nombre cliente

                try
                {
                    ViewBag.NombreCliente = bd.Repositorio_ClientesJuridicos.Where(x => x.CLI_IDENTIFICACION == CedulaGuiones).FirstOrDefault().CFI_NOMBRE;
                }
                catch {
                    ViewBag.NombreCliente = "No Registra";
                }

                
                ViewBag.CedulaCliente = CedulaGuiones;

            }



            return PartialView("Parciales/MatrizSeguimiento/_ConsultaFormularioMatriz");

        }












        #region Seccion Buscador        


        public ActionResult Buscador()
        {
            CargaDatosUsuario();
            //llenar el dropdowsList Inicial
            //enviar la lista por viewbag
            ViewBag.ListaProductos = new SelectList(ObtenerProducto(), "Productoid", "Producto1");
            //ObtenerProducto=carga inicial todo ~ Productoid= Codigo que guardará ~ "Producto"= nombre que mostrará


            using (CreditoNacionalEntities bd = new CreditoNacionalEntities())
            {
                ViewBag.FichasCompletas = bd.Ficha.ToList();
                ViewBag.GuiasCompletas = bd.GuiaComercial.ToList();
            }



            return View();
        }

        //obtener el producto
        public List<Producto> ObtenerProducto()
        {
            CreditoNacionalEntities bd = new CreditoNacionalEntities();//se instancia la conexion
            List<Producto> productos = bd.Producto.ToList();
            return productos;
        }

        //primera dependencia Fichas
        public ActionResult ObtenerFicha(int productoid)
        {
            CreditoNacionalEntities bd = new CreditoNacionalEntities();
            //se crea el filtrado
            List<Ficha> FiltroFichas = bd.Ficha.Where(x => x.Productoid == productoid).OrderBy(x => x.FICHAS).ToList();
                
                
            //se guarda en la variable
            ViewBag.Fichas = new SelectList(FiltroFichas, "Fichaid", "FICHAS");
            //se crea la vista parcial en shared
            return PartialView("MostrarFichas");
        }

        //segunda dependencia Guias
        public ActionResult ObtenerGuia(int Fichaid)
        {
            CreditoNacionalEntities bd = new CreditoNacionalEntities();
            //se crea el filtrado
            List<GuiaComercial> FiltroGuia = bd.GuiaComercial.Where(x => x.Fichaid == Fichaid).OrderBy(x=> x.GUIAS).ToList();
            //se guarda en la variable
            ViewBag.Guia = new SelectList(FiltroGuia, "Guiaid", "GUIAS");
            //se crea la vista parcial en shared
            ViewBag.desabilitar = Fichaid;
            return PartialView("MostrarGuias");
        }
                
        public void GuardarRegistroVisita(string UsuarioWindowsE, string EmailE, string NombreCompletoE, string EmpleadoE, string NombreE, string ApellidosE, string OficinaE, string PicE, string ProductoBuscadoE, string ActividadE, string TipoE, string GarantíaE,string GuiaComercialE)
        {
            try
            {
                using (CreditoNacionalEntities bd = new CreditoNacionalEntities())
                {
                    Visitas nuevoregistro = new Visitas
                    {
                        UsuarioWindows = UsuarioWindowsE,
                        Email = EmailE,
                        NombreCompleto = NombreCompletoE,
                        Empleado = EmpleadoE,
                        Nombre = NombreE,
                        Apellidos = ApellidosE,
                        Oficina = OficinaE,
                        Pic = PicE,
                        ProductoBuscado = ProductoBuscadoE,
                        Actividad = ActividadE,
                        Tipo = TipoE,
                        Garantía = GarantíaE,
                        FECHA = FechayHoraServidor(),
                        Hora = (FechayHoraServidor()).TimeOfDay,
                        GuiaComercial = GuiaComercialE

                    };

                    bd.Visitas.Add(nuevoregistro);
                    bd.SaveChanges();

                }
            }
            catch (Exception error)
            {
                ModelState.AddModelError("error al ingresar los datos", error);
            }

        }



        #endregion




        //***************************************************Varios **************************************////////////////////////

        #region ProcedimientoVarios

        //fecha y hora del servidor
        public DateTime FechayHoraServidor()
        {
            CreditoNacionalEntities bd = new CreditoNacionalEntities();
            DateTime dateTimeServer = bd.Database.SqlQuery<DateTime>("SELECT GETDATE() Fecha").SingleOrDefault();
            //DateTime dateTimeClient = DateTime.Now; Fecha cliente
            //TimeSpan hora = dateTimeServer.TimeOfDay; captura hora servirdor
            return (dateTimeServer);

        }


        public void CargaDatosUsuario()
        {

            try
            {


                //Propiedades de usuario 2
                string[] usuario = (@User.Identity.Name).Split('\\');
                string UsuarioID = usuario[1].Trim();//listo usuario
                char TipoUser = Convert.ToChar(UsuarioID.Substring(1, 1));//obtiene si usuario si se registra con número o alias de correo
                string cargaPropiedades = PropiedadesUsuario(UsuarioID, TipoUser); //envio de usuario para carga de datos                                                                                   //carga para vista
                ViewBag.FotoUsuario = archivo64; //imagen
                ViewBag.NombreUsuario = NombreUsuario.Replace("CN=", ""); //carga de nombre usuario
                ViewBag.userPrincipalName = userPrincipalName;
                ViewBag.sAMAccountName = sAMAccountName;
                ViewBag.initials = initials;
                ViewBag.Given_Name = Given_Name; //primer nombre
                ViewBag.sn = sn; //apellido
                ViewBag.mail = mail;
                ViewBag.mobile = mobile;
                ViewBag.telephoneNumber = telephoneNumber;
                ViewBag.streetAddress = streetAddress;
                ViewBag.postalCode = postalCode;
                ViewBag.Location = Location;
                ViewBag.phone = Phone;
                ViewBag.Department = Department;


            }
            catch (Exception)
            {


            }



        }



        public string PropiedadesUsuario(string userName, char TipoUser)
        {
            using (DirectorySearcher dsSearcher = new DirectorySearcher())
            {
                try
                {

                    SearchResult result = dsSearcher.FindOne();


                    if (char.IsLetter(TipoUser))
                    {
                        //caso de login con alias de correo
                        userName = userName + "@bncr.fi.cr";//listo usuario
                        dsSearcher.Filter = "(&(objectClass=user) (mail=" + userName + "))";
                        result = dsSearcher.FindOne();

                    }
                    else
                    {

                        int total = userName.Length;
                        int corte = total - 3;
                        userName = userName.Substring(0, corte);

                        //en el caso de login con numero de empleado
                        dsSearcher.Filter = "(&(objectClass=user) (initials=" + userName + "))";
                        result = dsSearcher.FindOne();

                    }



                    using (DirectoryEntry user = new DirectoryEntry(result.Path))
                    {


                        if (user.Properties["thumbnailPhoto"].Value is byte[] data)
                        {
                            archivo64 = Convert.ToBase64String(data);
                            archivo64 = "data:image/png;base64," + archivo64;
                        }
                        else
                        {
                            archivo64 = "/Content/imagenes/Buscador/prueba/icono6.ico";
                        }



                        NombreUsuario = user.Name;
                        userPrincipalName = (user.Properties["userPrincipalName"].Value).ToString();
                        sAMAccountName = (user.Properties["sAMAccountName"].Value = userName).ToString();
                        initials = (user.Properties["initials"].Value).ToString();//numero de empleado -initials-
                        Given_Name = (user.Properties["GivenName"].Value).ToString();
                        sn = (user.Properties["sn"].Value).ToString();
                        mail = (user.Properties["mail"].Value).ToString();
                        //mobile =   (user.Properties["mobile"].Value).ToString();
                        //telephoneNumber =    (user.Properties["telephoneNumber"].Value).ToString();
                        //streetAddress=    (user.Properties["streetAddress"].Value).ToString();
                        //postalCode =    (user.Properties["postalCode"].Value).ToString();
                        Location = user.Properties["physicalDeliveryOfficeName"].Value.ToString();
                        //Phone = user.Properties["telephoneNumber"].Value.ToString();
                        //Department = user.Properties["department"].Value.ToString();

                        return "string"; //vacio, solo para carga de datos
                    }

                }
                catch (Exception e)
                {
                    archivo64 = "/Content/imagenes/Buscador/prueba/icono6.ico";
                    return "";
                }

            }
        }//FIN PropiedadesUsuario



        public ActionResult ErrorAcceso()
        {
            if (Given_Name == null)
            {
                CargaDatosUsuario();
            }

            ViewBag.Nombre = Given_Name;
            return View();

        }



        #endregion




    }//fin programa
}