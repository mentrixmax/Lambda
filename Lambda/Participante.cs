using Menfram.DAL.Reflection;
using Menfram.Entity.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lambda
{
    [Table(TableName = "Participantes")]
    public class Participante : IEntity
    {
        [NoField]
        public string DescriptionComboBox
        {
            get
            {
                return Titulacao + " - " + Nome;
            }
        }

        [NoField]
        public string Key
        {
            get;
        }

        [Key(Pk = true,KKey =true)]
        public int? Sequencial
        {
            get;

            set;
        }

        public String Nome { get; set; }
        public String Email { get; set; }
        public String Linhaspesquisa { get; set; }
        public String BreveCurriculum { get; set; }
        public String Titulacao { get; set; }
        public String Lattes { get; set; }
        public String Foto { get; set; }
        public bool? Ativo { get; set; }
        public int? Tipo { get; set; }


    }
}