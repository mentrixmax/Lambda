using Menfram.DAL.Reflection;
using Menfram.Entity.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lambda
{
    [Table(TableName ="Projetos")]
    public class ProjetosEntity : IEntity
    {
        [NoField]
        public string DescriptionComboBox
        {
            get
            {
                return "";
            }
        }

        [NoField]
        public string Key
        {
            get { return ""; }
        }

        [Key(Pk =true, KKey =true)]
        public int? Sequencial
        {
            get;
            set;
        }

        public String Projeto { get; set; }
        public int? Situacao { get; set; }
        public String Parceiro { get; set; }
        public String Imagem1 { get; set; }
        public String Descricao { get; set; }
    }
}