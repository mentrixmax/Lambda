using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Lambda
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Login1_LoggingIn(object sender, LoginCancelEventArgs e)
        {
            if (Login1.UserName.Equals("adm") &&
                Login1.Password.Equals("lambda@ifce"))
            {
                Session.Add("user", "adm");
                Response.Redirect("Participantes.aspx");
            }
            else {
            }
        }
    }
}