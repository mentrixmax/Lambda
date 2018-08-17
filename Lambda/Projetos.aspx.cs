using Menfram.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Lambda
{
    public partial class Projetos : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                Menfram.Implementation.DAL.SQLDAO conn = new Menfram.Implementation.DAL.SQLDAO();
                //String url = "user id=sa;pwd=windows2000;data source=localhost;persist security info=False;initial catalog=lambda//"
                // String url = "Data Source=localhost;" + "Initial Catalog=lambda;" + "User id=sa;" + "Password=windows2000;";
                String urlRemote = System.Configuration.ConfigurationManager.ConnectionStrings["root"].ConnectionString;
                //String urlRemote = "workstation id=lamifce.mssql.somee.com;packet size=4096;user id=lambdaifce_SQLLogin_1;pwd=twh7176g69;data source=lamifce.mssql.somee.com;persist security info=False;initial catalog=lamifce";
                conn.ConnectionUrl = urlRemote;//ConfigurationManager.ConnectionStrings["fickrio"].ConnectionString;
                Constantes.Conexao = conn;
                ProjetosDAO prj = new ProjetosDAO();
                IList<ProjetosEntity> projets = prj.findByParameters(new ProjetosEntity() { Situacao = 1 });
                GridView1.DataSource = projets;
                GridView1.DataBind();


            }
        }
    }
}