<%@ Page Title="" Language="C#" MasterPageFile="~/Layout.Master" AutoEventWireup="true" CodeBehind="Participantes.aspx.cs" Inherits="Lambda.Participantes1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div style="width: 100%; height: 300px;">
        <p style="font-size: 40px; color: rgba(90, 191, 208, 1);">Pesquisadores: </p>
        <div>
            &nbsp;<asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False">
                <Columns>
                    <asp:ImageField DataImageUrlField="foto" HeaderText="Foto">
                        <ControlStyle Height="200px" Width="180px" />
                    </asp:ImageField>
                    <asp:HyperLinkField DataTextField="DescriptionComboBox" HeaderText="Nome">
                        <ItemStyle Height="100px" Width="100px" />
                    </asp:HyperLinkField>
                    <asp:BoundField DataField="brevecurriculum" HeaderText="Mini Curriculum" >
                    <ItemStyle Width="600px" />
                    </asp:BoundField>
                    <asp:HyperLinkField DataTextField="lattes" HeaderText="Lattes" DataNavigateUrlFields="Lattes" DataNavigateUrlFormatString="{0}" Text="Lattes" />
                    <asp:BoundField DataField="email" HeaderText="E-mail" />
                </Columns>
            </asp:GridView>
        </div>


        <p style="font-size: 40px; color: rgba(90, 191, 208, 1);">Alunos: </p>
        <div>
            &nbsp;<asp:GridView ID="GridView2" runat="server" AutoGenerateColumns="False">
                <Columns>
                    <asp:ImageField DataImageUrlField="foto" HeaderText="Foto">
                        <ControlStyle Height="200px" Width="180px" />
                    </asp:ImageField>
                    <asp:HyperLinkField DataTextField="DescriptionComboBox" HeaderText="Nome">
                        <ItemStyle Height="100px" Width="100px" />
                    </asp:HyperLinkField>
                    <asp:BoundField DataField="brevecurriculum" HeaderText="Mini Curriculum" >
                    <ItemStyle Width="600px" />
                    </asp:BoundField>
                    <asp:HyperLinkField DataTextField="lattes" HeaderText="Lattes" DataNavigateUrlFields="Lattes" DataNavigateUrlFormatString="{0}" Text="Lattes" />
                    <asp:BoundField DataField="email" HeaderText="Email" />
                </Columns>
            </asp:GridView>
        </div>
    </div>

</asp:Content>
