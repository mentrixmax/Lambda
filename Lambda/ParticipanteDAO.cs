using Menfram.DAL.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lambda
{
    public class ParticipanteDAO : AbstractDAO<Participante>
    {
        public override Type getTipo()
        {
            return typeof(Participante);
        }
    }
}