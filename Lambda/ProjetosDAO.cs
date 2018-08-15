using Menfram.DAL.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lambda
{
    public class ProjetosDAO : AbstractDAO<ProjetosEntity>
    {
        public override Type getTipo()
        {
            return typeof(ProjetosEntity);
        }
    }
}