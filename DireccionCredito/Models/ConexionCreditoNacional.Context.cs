﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DireccionCredito.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class CreditoNacionalEntities : DbContext
    {
        public CreditoNacionalEntities()
            : base("name=CreditoNacionalEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Ficha> Ficha { get; set; }
        public virtual DbSet<GuiaComercial> GuiaComercial { get; set; }
        public virtual DbSet<Producto> Producto { get; set; }
        public virtual DbSet<Visitas> Visitas { get; set; }
        public virtual DbSet<Rol> Rol { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }
        public virtual DbSet<Usuario_Rol> Usuario_Rol { get; set; }
    }
}
