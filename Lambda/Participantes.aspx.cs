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

        public void refreshCima() {

            getConn();
            ParticipanteDAO dao = new ParticipanteDAO();

            IList<Participante> pesquisadores = dao.findByParameters(new Participante() { Tipo = 1 });

            GridView1.DataSource = pesquisadores;
            GridView1.DataBind();

            
        }

        public void getConn()
        {
            Menfram.Implementation.DAL.SQLDAO conn = new Menfram.Implementation.DAL.SQLDAO();
            String urlRemote = System.Configuration.ConfigurationManager.ConnectionStrings["root"].ConnectionString;
            conn.ConnectionUrl = urlRemote;
            Constantes.Conexao = conn;

        }
        public void refreshBaixo()
        {
            getConn();
            ParticipanteDAO dao = new ParticipanteDAO();
            
            IList<Participante> alunos = dao.findByParameters(new Participante() { Tipo = 2 });
            GridView2.DataSource = alunos;
            GridView2.DataBind();
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack) {
                if (Session["user"] != null)
                {
                    Edit.Value = "true";
                }
                refreshCima();
                refreshBaixo();
            }
            
            //String url = "user id=sa;pwd=windows2000;data source=localhost;persist security info=False;initial catalog=lambda//"
            //String url = "Data Source=localhost;" + "Initial Catalog=lambda;" + "User id=sa;" + "Password=windows2000;";

            //String urlRemote = "workstation id=lamifce.mssql.somee.com;packet size=4096;user id=lambdaifce_SQLLogin_1;pwd=twh7176g69;data source=lamifce.mssql.somee.com;persist security info=False;initial catalog=lamifce";
            
            
         

        }

        protected void GridView2_DataBinding(object sender, EventArgs e)
        {
            if (Edit.Value=="") {
                this.GridView2.Columns[6].Visible = false;
                this.GridView2.Columns[5].Visible = false;
            }
            
        }

        protected void GridView1_DataBinding(object sender, EventArgs e)
        {
            if (Edit.Value == "")
            {
                this.GridView1.Columns[5].Visible = false;
                this.GridView1.Columns[6].Visible = false;
            }
            
        }

        protected void GridView1_DataBound(object sender, EventArgs e)
        {

        }

        protected void GridView1_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)

            {

                e.Row.Cells[6].Attributes.Add("onclick", "javascript:return " +

                "confirm('Confirma a exclusão do Membro " +

                DataBinder.Eval(e.Row.DataItem, "Nome") + "?')");

            }
        }

        protected void GridView1_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            String Sequencial = e.Values["Sequencial"].ToString();
            try {
                ParticipanteDAO dao = new ParticipanteDAO();
                dao.delete(Convert.ToInt32(Sequencial));
                refreshCima();

            } catch {
            }
        }

        protected void GridView1_RowEditing(object sender, GridViewEditEventArgs e)
        {
            String id = GridView1.Rows[e.NewEditIndex].Cells[7].Text;
            Response.Redirect("CadastroMembros.aspx?id=" + id);
        }

        protected void GridView2_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)

            {

                e.Row.Cells[5].Attributes.Add("onclick", "javascript:return " +

                "confirm('Confirma a exclusão do Membro " +

                DataBinder.Eval(e.Row.DataItem, "Nome") + "?')");

            }
        }

        protected void GridView2_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            String Sequencial = e.Values["Sequencial"].ToString();
            try
            {
                ParticipanteDAO dao = new ParticipanteDAO();
                dao.delete(Convert.ToInt32(Sequencial));
                refreshBaixo();
            }
            catch
            {
            }
        }

        protected void GridView2_RowEditing(object sender, GridViewEditEventArgs e)
        {
            String id = GridView2.Rows[e.NewEditIndex].Cells[7].Text;
            Response.Redirect("CadastroMembros.aspx?id=" + id);
        }
    }
}