using DireccionCredito.Filtros;
using DireccionCredito.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DireccionCredito.Controllers
{
    public class VisitasController : Controller
    {
        // GET: Visitas
        public ActionResult Index()
        {
            return View();
        }

        [Autorizacion("2")]
        public ActionResult RegistroVisitas()
        {
            using(CreditoNacionalEntities bd = new CreditoNacionalEntities())
            {
                
                return View(bd.Visitas.ToList());

            }
            
        }


    }
}