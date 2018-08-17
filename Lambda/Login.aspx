<%@ Page Title="" Language="C#" MasterPageFile="~/Layout.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Lambda.Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div style="position:absolute; 	left:45%; top:45%;">
        <asp:Login ID="Login1" runat="server" BackColor="#000000" ForeColor="#5abfd0" OnLoggingIn="Login1_LoggingIn">
        </asp:Login>
    </div>
</asp:Content>
