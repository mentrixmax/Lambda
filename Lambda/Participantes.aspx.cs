using Menfram.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Lambda
{
    public partial class Participantes1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack) { }
            Menfram.Implementation.DAL.SQLDAO conn = new Menfram.Implementation.DAL.SQLDAO();
            //String url = "user id=sa;pwd=windows2000;data source=localhost;persist security info=False;initial catalog=lambda//"
            String url = "Data Source=localhost;" + "Initial Catalog=lambda;" + "User id=sa;" + "Password=windows2000;";

            String urlRemote = "workstation id=lamifce.mssql.somee.com;packet size=4096;user id=lambdaifce_SQLLogin_1;pwd=twh7176g69;data source=lamifce.mssql.somee.com;persist security info=False;initial catalog=lamifce";

            conn.ConnectionUrl = urlRemote;//ConfigurationManager.ConnectionStrings["fickrio"].ConnectionString;
            Constantes.Conexao = conn;

            ParticipanteDAO dao = new ParticipanteDAO();

            IList<Participante> pesquisadores = dao.findByParameters(new Participante() { Tipo = 1 });

            GridView1.DataSource = pesquisadores;
            GridView1.DataBind();

            IList<Participante> alunos = dao.findByParameters(new Participante() { Tipo = 2 });

            GridView2.DataSource = alunos;
            GridView2.DataBind();

        } 
	}
}