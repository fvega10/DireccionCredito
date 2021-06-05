using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DireccionCredito.Models.Buscador
{
    public class DependenciaProductos
    {
        //se crean con cada una de las llaves principales de las tablas

        public int Productoid { get; set; }
        public int Fichaid { get; set; }
        public int Guiaid { get; set; }
    }
}