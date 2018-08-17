<%@ Page Title="" Language="C#" MasterPageFile="~/Layout.Master" AutoEventWireup="true" CodeFile="Sucesso.aspx.cs" Inherits="Config_SucessoV" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="alertsucess">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        <strong>Sucesso</strong> Operação realizada com sucesso!
    </div>
</asp:Content>

