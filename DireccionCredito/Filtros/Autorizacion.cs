using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DireccionCredito.Filtros
{
    [AttributeUsage(AttributeTargets.Method,AllowMultiple =false)]
    public class Autorizacion:AuthorizeAttribute
    {
        //variables a recibir
        private string Rol_Actual;

        //carga Rol actual
        public Autorizacion(string Rol)
        {
            Rol_Actual = Rol;
        }

        //sobreescribir metodo de autorizacion

        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            string UsuarioActivo = System.Web.HttpContext.Current.User.Identity.Name;
            string[] arreglo = UsuarioActivo.Split('\\');
            UsuarioActivo = arreglo[1].Trim();
            char TipoUser = Convert.ToChar(UsuarioActivo.Substring(1, 1));//obtiene si usuario si se registra con número o alias de correo
            if (char.IsLetter(TipoUser))
            {
                //ok
            }
            else
            {
                int total = UsuarioActivo.Length;
                int corte = total - 3;
                UsuarioActivo = UsuarioActivo.Substring(0, corte);
            }

            using (Models.CreditoNacionalEntities1 bd = new Models.CreditoNacionalEntities1())
            {

                var Acceso = (from d in bd.Usuario_Rol
                              where UsuarioActivo == d.Id_Usuario &&
                              Rol_Actual == d.Id_Rol
                              select d).FirstOrDefault();

                if (Acceso != null)
                {
                    //ok
                }
                else
                {
                    filterContext.Result = new RedirectResult("~/Home/ErrorAcceso");
                }


            }




        }







    }//fin

}