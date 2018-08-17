using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Lambda
{
    public partial class CadastroMembros : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                if (Session["user"] == null) {
                    Response.Redirect("Login.aspx");
                }
                if (Request.Params["id"] != null)
                {
                    String id = Request.Params["id"];
                    getConn();
                    Participante par = new ParticipanteDAO().findById(Convert.ToInt32(id));
                    txtNome.Text = par.Nome;
                    txtEmail.Text = par.Email;
                    txtLinhaPesquisa.Text = par.Linhaspesquisa;
                    txtCurriluim.Text = par.BreveCurriculum;
                    cbTec.SelectedValue = par.Titulacao;
                    cbTipo.SelectedValue = par.Tipo.ToString();
                    txtFoto.Value = par.Foto;
                    Image1.ImageUrl = par.Foto;
                    Seq.Value = par.Sequencial.ToString();
                    txtLattes.Text = par.Lattes;
                }
            }
        }

        protected void BtCancelar_Click(object sender, EventArgs e)
        {

        }

        private void getConn() {
            Menfram.Implementation.DAL.SQLDAO conencao = new Menfram.Implementation.DAL.SQLDAO();
            String urlRemote = System.Configuration.ConfigurationManager.ConnectionStrings["root"].ConnectionString;
            conencao.ConnectionUrl = urlRemote;
            Menfram.Common.Constantes.Conexao = conencao;

        }
        protected void BtSalvar_Click(object sender, EventArgs e)
        {
            try
            {
                Page.Validate();
                if (Page.IsValid) {
                    getConn();
                    Participante part = new Participante();
                    
                        
                    part.Nome = txtNome.Text;
                    part.Email = txtEmail.Text;
                    part.BreveCurriculum = txtCurriluim.Text;
                    part.Ativo = true;
                    part.Foto = txtFoto.Value;
                    part.Lattes = txtLattes.Text;
                    part.Titulacao = cbTec.SelectedValue;
                    part.Tipo = Convert.ToInt32(cbTipo.SelectedValue);
                    part.Linhaspesquisa = txtLinhaPesquisa.Text;
                    ParticipanteDAO dao = new ParticipanteDAO();
                    if (Seq.Value == "")
                    {
                        dao.create(part);
                    }
                    else {
                        part.Sequencial = Convert.ToInt32(Seq.Value);
                        dao.update(part);
                    }
                    
                    Server.Transfer("~/Sucesso.aspx");
                }

            }
            catch { }
        }

        protected void btnFoto_Click(object sender, EventArgs e)
        {

        }

        protected void btnSalvar_Click(object sender, EventArgs e)
        {

        }

        protected void btnUp_Click(object sender, EventArgs e)
        {
            if (this.FileUpload1.HasFile)
            {
                this.FileUpload1.SaveAs(Server.MapPath("Fotos/" + FileUpload1.FileName));
                txtFoto.Value = "Fotos/" + FileUpload1.FileName;
                this.Image1.ImageUrl = "Fotos/" + FileUpload1.FileName;
            }
        }
    }
}