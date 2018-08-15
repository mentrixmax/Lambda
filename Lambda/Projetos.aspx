<%@ Page Title="" Language="C#" MasterPageFile="~/Layout.Master" AutoEventWireup="true" CodeBehind="Projetos.aspx.cs" Inherits="Lambda.Projetos" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div style="width: 100%; height: 300px;">
        <p style="font-size: 40px; color: rgba(90, 191, 208, 1);">Projetos </p>
        <div>
            &nbsp;<asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False">
                <Columns>
                    <asp:ImageField DataImageUrlField="Imagem1" HeaderText="Imagem">
                        <ControlStyle Height="200px" Width="300px" />
                    </asp:ImageField>
                    <asp:HyperLinkField DataTextField="Projeto" HeaderText="Projeto">
                        <ItemStyle Height="100px" Width="100px" />
                    </asp:HyperLinkField>
                    <asp:BoundField DataField="Descricao" HeaderText="Descrição do Projeto" >
                    <ItemStyle Width="600px" />
                    </asp:BoundField>
                    <asp:HyperLinkField DataTextField="Parceiro" HeaderText="Parceiros" />
                </Columns>
            </asp:GridView>
        </div>
        
    </div>
</asp:Content>
