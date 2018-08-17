<%@ Page Title="" Language="C#" MasterPageFile="~/Layout.Master" AutoEventWireup="true" CodeBehind="CadastroMembros.aspx.cs" Inherits="Lambda.CadastroMembros" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    </asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <p style="height: 10px; clear: left">
    </p>
    <asp:HiddenField ID="txtFoto" runat="server" />
    <asp:HiddenField ID="Seq" runat="server" />
    <div class="campo" style="width: 370px; clear: left">
        <asp:Label ID="Label1" runat="server" Text="Nome"></asp:Label>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Campo obrigatório" ForeColor="#FF3300" ControlToValidate="txtNome">*</asp:RequiredFieldValidator>
        <asp:TextBox ID="txtNome" runat="server" Width="348px"></asp:TextBox>

    </div>

    <div class="campo" style="width: 360px; clear: left">
        <asp:Label ID="Label2" runat="server" Text="Email"></asp:Label>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="Campo obrigatório" ForeColor="#FF3300" ControlToValidate="txtEmail">*</asp:RequiredFieldValidator>
        <asp:TextBox ID="txtEmail" runat="server" Width="348px"></asp:TextBox>
    </div>

    <div class="campo" style="width: 550px; clear: left">
        <asp:Label ID="Label4" runat="server" Text="Linha de Pesquisa"></asp:Label>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="Campo obrigatório" ForeColor="#FF3300" ControlToValidate="txtLinhaPesquisa">*</asp:RequiredFieldValidator>
        <asp:TextBox ID="txtLinhaPesquisa" runat="server" Width="543px"></asp:TextBox>
    </div>

    <div class="campo" style="width: 110px; clear: left">
        <asp:Label ID="Label5" runat="server" Text="Titulação"></asp:Label>

        <asp:DropDownList ID="cbTec" runat="server" Width="100px">
            <asp:ListItem Value="Tc">Técnico</asp:ListItem>
            <asp:ListItem Value="Grd">Graduado</asp:ListItem>
            <asp:ListItem Value="Esp">Especialista</asp:ListItem>
            <asp:ListItem Value="Ms">Mestre</asp:ListItem>
            <asp:ListItem Value="Dr">Doutor</asp:ListItem>
        </asp:DropDownList>
    </div>

    <div class="campo" style="width: 200px;">
        <asp:Label ID="Label8" runat="server" Text="Tipo"></asp:Label><br />
        <asp:DropDownList ID="cbTipo" runat="server">
            <asp:ListItem Value="2">Aluno</asp:ListItem>
            <asp:ListItem Value="1">Pesquisador</asp:ListItem>
        </asp:DropDownList>
    </div>

    <div class="campo" style="width: 550px; clear: left">
        <asp:Label ID="Label6" runat="server" Text="Lattes"></asp:Label>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ErrorMessage="Campo obrigatório" ForeColor="#FF3300" ControlToValidate="txtLattes">*</asp:RequiredFieldValidator>
        <asp:TextBox ID="txtLattes" runat="server" Width="543px"></asp:TextBox>
    </div>

    <div class="campo" style="width: 380px; clear: left">
        <asp:Label ID="Label7" runat="server" Text="Foto"></asp:Label>
        <br />
        <asp:Image ID="Image1" runat="server" Height="200px" Width="180px" />
        <asp:FileUpload ID="FileUpload1" runat="server" Width="342px" />
        <asp:Button runat="server" ID="btnUp" Text="GravarFoto" OnClick="btnUp_Click" CausesValidation="false" CssClass="bottoes"/>
    </div>


    <div class="campo" style="float: left">
        <asp:Label ID="Label3" runat="server" Text="Curriculum"></asp:Label>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ErrorMessage="Campo obrigatório" ForeColor="#FF3300" ControlToValidate="txtCurriluim">*</asp:RequiredFieldValidator>
        <br />
        <asp:TextBox ID="txtCurriluim" runat="server" Width="1068px" Height="161px" TextMode="MultiLine"></asp:TextBox>
    </div>
    <br />

    <div style="float: left; width: 400px">
        <table style="width: 100%; background-color: black;">
            <tr>
                <td style="background-color:black; border-bottom:none; border-top:none; border-left:none; border-right:none; width:20px;  " >
                    <asp:Button ID="BtSalvar" runat="server" Text="Salvar" CssClass="bottoes" OnClick="BtSalvar_Click" />
                </td>
                <td style="background-color:black ; border-bottom:none; border-top:none; border-left:none; border-right:none">
                    <asp:Button ID="BtCancelar" runat="server" Text="Cancelar" CssClass="bottoes" PostBackUrl="~/Default.aspx" />
                </td>

            </tr>
        </table>

    </div>

    

</asp:Content>
