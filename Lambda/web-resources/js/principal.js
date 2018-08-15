function getBrowser() {
   
   var applicationName = navigator.appName;

	var browser;

	switch(applicationName){
		
		case "Microsoft Internet Explorer":
		
			browser = "Internet Explorer";
			
		break
		case "Netscape":
		
			browser = "Netscape";
			
		break
		default:
		
			browser = "Outro Browser";
			
	}
   
	return browser;
		
}




//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Fun??o para apresentar e esconder "determinados objetos (?reas)" a partir da sele??o de um Combobox
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function Combo_Transf_Visivel(combo, objeto1, objeto2)
	{
					var op_sel = combo.options[combo.selectedIndex].index;
					
					objeto1.style.display = "none";
					objeto2.style.display = "none";
					
					if (op_sel == 1) objeto1.style.display = "block"
					if (op_sel == 2) objeto2.style.display = "block"
	}
	

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Fun??o para navegar para proxima pagina
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// _self
// _blank
// _parente (padrao)
	
	
function AbrePagina(href, target)
{

	//target

	window.location = href;
	
}//fim function

//objeto.style.display = "table-row"; qdo se trabalha c/tabelas
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Fun??o para apresentar e esconder "determinados objetos (?reas)"  1 - visivel; 0 - invisivel
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function OpVisibilidade(objeto, operacao)
{
	if (operacao == 1) {
			
		objeto.style.display = "block";
	}
	else
	
		objeto.style.display = "none";
}


function Mostra(elemento)
{
	
	OpVisibilidade(document.getElementById(elemento), 1);

}
	
function MudaClasse(id, className){
	
	document.getElementById(id).className	= className;	

}



function Esconde(elemento)
{
	
	OpVisibilidade(document.getElementById(elemento),0);

}
	





						 
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------						 
// funcionalidade : Marca / Desmarca Todos Checkboxs
// pode ser reutilizada
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------						 
function Marca_Todos_Checkbox(form,input)
{
	var local_form = document.getElementById(form);
	var objs = local_form.getElementsByTagName('input');
	var marca = document.getElementById(input).checked;

	for (var i=0; i<objs.length; i++) {
		if (objs[i].type=='checkbox') objs[i].checked = marca;
	}
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------						 
// funcionalidade : Marca / Desmarca Todos Checkboxs
// pode ser reutilizada
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------						 
						 
	

function Operacao_Edicao(id_check)
{

	var obj_check     	= id_check;
	if (obj_check ){
		
			document.getElementById('BtAlterar').className 		= "Botao";	
			document.getElementById('BtExcluir').className 		= "Botao";	
			document.getElementById('BtConsultar').className 	= "Botao";	
			
			document.getElementById('BtAlterar').disabled 		= 0;	
			document.getElementById('BtExcluir').disabled 		= 0;	
			document.getElementById('BtConsultar').disabled 	= 0;				
			

	}
	else{
		
			document.getElementById('BtAlterar').className 		= "Botao_Desabilitado";	
			document.getElementById('BtExcluir').className 		= "Botao_Desabilitado";	
			document.getElementById('BtConsultar').className 	= "Botao_Desabilitado";	

			document.getElementById('BtAlterar').disabled 		= 1;	
			document.getElementById('BtExcluir').disabled 		= 1;	
			document.getElementById('BtConsultar').disabled 	= 1;	
	}
}

function Botoes(elemento)
{
	Operacao_Edicao(document.getElementById(elemento).checked);
	
}





function DataAtual()
{
	document.write('Ter&ccedil;a-feira, <strong>20 de Maio de 2005</strong>');
}

function MostraAba(tab, aba)
{
	var abas = document.getElementById(tab).getElementsByTagName('a');
	for (j=0; j<abas.length; j++) {
		if(abas[j].id.indexOf("aba") != -1) {
			MudaClasse(abas[j].id,'inativa');
			Esconde("conteudo-" + abas[j].id);
		}
	}
	MudaClasse(aba,'ativa');
	Mostra("conteudo-" + aba);
}


function AbreLov(janela, caminho)
{
	window.open(caminho,janela,'width=780,height=460,top=0,left=0,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=auto,resizable=no,copyhistory=no');
}



function PassaValor(valor1, valor2, target1, target2) {
	document.getElementById(target1).value = document.getElementById(valor1).value;
	document.getElementById(target2).value = document.getElementById(valor2).value;
	
}



function PassaValorJanela(valor1, valor2, target1, target2) {
	window.opener.document.getElementById(target1).value = document.getElementById(valor1).value;
	window.opener.document.getElementById(target2).value = document.getElementById(valor2).value;
}



function PassaValorJanelaV2T1(valor1, valor2, target1, separador) {
	window.opener.document.getElementById(target1).value = document.getElementById(valor1).value + separador + document.getElementById(valor2).value;
}

/*------------------------------- MENU -----------------------------------------*/

var border_right = 1;
var border_left = 1;
var border_top = 1;
var border_bottom = 1;

Events = {};
Events.add = function(obj,type,handler,cap){
    cap = cap || false;
    if(obj.addEventListener){
	 obj.addEventListener(type, handler, cap);
    }else{
	obj.attachEvent("on" + type, handler);
    }
}

Events.remove = function(obj,type,handler,cap){
    cap = cap || false;
    if(obj.removeEventListener){
	 obj.removeEventListener(type, handler, cap);
    }else{
	obj.detachEvent("on" + type, handler);
    }
}

Events.add(window,"load",loadMenu)

function loadMenu(){

	if(window.attachEvent){
	
		var ieULs = document.getElementById('nav').getElementsByTagName('ul');
		
		/** IE script to cover <select> elements with <iframe>s **/
		for (j=0; j<ieULs.length; j++) {
			ieULs[j].innerHTML = ('<iframe src="about:blank" scrolling="no" frameborder="0" id="nav_iframe"></iframe>' + ieULs[j].innerHTML);
			ieULs[j].style.zIndex="99";
		}
		
	}
	
	
	var ieLIs = document.getElementById('nav').getElementsByTagName('li');
	for (var i=0; i<ieLIs.length; i++){

		ieLIs[i].onmouseover=function() {
			
			var ulChilds = this.getElementsByTagName("ul")[0];

			if(ulChilds){
				
				var parentWidth = getSize(this).width;
				var majorChild = getMajorChilds(ulChilds);
				
				if(!this.width){
				    this.width = (parentWidth > majorChild && this.parentNode.parentNode.nodeName == "DIV")?parentWidth:majorChild;
				}
				
				ulChilds.style.width = this.width +"px";

				var liChilds = ulChilds.childNodes;
				
				for (var i = 0; i < liChilds.length; i++){
				if(liChilds[i].nodeType == 1)
				    liChilds[i].style.width = this.width +"px";
				}
				
			}

			if(this.getElementsByTagName("iframe")[0]){
				var iframe = this.getElementsByTagName("iframe")[0];
				iframe.style.width = this.width+border_right+border_left+"px";
				if(this.childNodes[2])
				iframe.style.height = this.getElementsByTagName("li")[0].offsetHeight*(this.childNodes[2].childNodes.length-1) + (border_top*2)+ "px";
			}

			if(this.parentNode.id != "nav"){
			
				var childs = this.getElementsByTagName("ul")[0];
				
				if(childs){
				    childs.style.marginLeft = getSize(this).width + "px";
				    childs.style.marginTop = - getSize(this).height - (border_top + border_bottom)*2 + "px";
				}

			}
			
			this.className+=" iehover";
			
		}
		
		ieLIs[i].onmouseout=function() {
		
			this.className=this.className.replace('iehover', '');
			
		}
		
	}
	
}

function getMajorChilds(list){

	var major=0;
	var childs = list.childNodes;

	for (var i=0; i<childs.length; i++){
		if(childs[i].offsetWidth > major && childs[i].nodeName != "IFRAME"){
		    major = childs[i].offsetWidth;
		}
	}
	return major;
}

function getSize(obj){
    var size = {};
    if(window.getComputedStyle){
	size.width = window.getComputedStyle(obj,'').getPropertyValue("width").split("px")[0];
	size.height = window.getComputedStyle(obj,'').getPropertyValue("height").split("px")[0];
    }else{
	size.width = obj.currentStyle.width.split("px")[0];
	size.height = 22;
    }
    return size;
}


/*------------------------Definicao do Menu -------------------------------------------*/

function CriaMenu()
{
		var str = '';
		str		= str +	'<ul id="nav">';
		str		= str +	'  <li><a href="#" class="menubar">Cadastro</a>';
		str		= str +	' 	<ul>';
		str		= str +	' 		<li><a href="../ManterAreasCredito/ManterAreasCredito.htm">?reas de Cr?dito</a></li>';
		str		= str +	' 		<li><a href="../ManterCategoriasAnimais/ManterCategoriasAnimais.htm">Categorias de Animais</a></li>';
		str		= str +	' 		<li><a href="../ManterEspeciesAnimais/ManterEspeciesAnimais.htm">Esp?cies de Animais</a></li>';
/*		str		= str +	' 		<li><a href="#">Finalidades de Empreendimentos</a></li>';
		str		= str +	' 		<li><a href="#">Gestores de Fontes de Recurso</a></li>';*/
		str		= str +	' 		<li><a href="../ManterIndicesZootecnicosPadrao/ManterIndicesZootecnicosPadrao.htm">?ndices Zootecnicos Padr?o</a></li>';
		str		= str +	' 		<li><a href="../ManterItensCusto/ManterItensCusto.htm">Itens de Custo</a></li>';
/*		str		= str +	' 		<li><a href="#">Itens Imobilizado</a></li>';
		str		= str +	' 		<li><a href="#">Operadores  de Recursos</a></li>';
		str		= str +	' 		<li><a href="#">Produtos Agr?colas</a></li>';
		str		= str +	' 		<li><a href="#">Repassadores de Recursos</a></li>';
		str		= str +	' 		<li><a href="#">Setores de Atividade</a></li>';
		str		= str +	' 		<li><a href="#">Sistemas Produtivos</a></li>'; */
		str		= str +	' 		<li><a href="../ManterSuporteForrageiroPadrao/ManterSuporteForrageiroPadrao.htm">Suporte Forrageiro Padr?o</a></li>';
/*		str		= str +	' 		<li><a href="#">Tipos de Documento</a></li>';
		str		= str +	' 		<li><a href="#">Tipos de Empreendimento</a></li>';
		str		= str +	' 		<li><a href="#">Tipos de Indeferimento</a></li>';
		str		= str +	' 		<li><a href="#">Tipos de Instrumento Contratual</a></li>';
		str		= str +	' 		<li><a href="#">Tipos de Participante</a></li>';
		str		= str +	' 		<li><a href="#">Tipos de Seguro</a></li>'; */
		str		= str +	' 		<li><a href="../ManterDestinacoes/ManterDestinacoes.htm">Destina??es</a></li>'; 
		str		= str +	' 	</ul>';
		str		= str +	'  </li>';
		str		= str +	'  <li><a href="#" class="menubar">Proposta</a></li>';
		str		= str +	'  <li><a href="#" class="menubar">Pr?-An?lise</a></li>';
		str		= str +	'  <li><a href="#" class="menubar">An?lise</a></li>';
		str		= str +	'  <li><a href="#" class="menubar">Contrato</a></li>';
		str		= str +	'  <li><a href="#" class="menubar">Libera??o</a></li>';
		str		= str +	'  <li><a href="#" class="menubar">Amortiza??o</a></li>';
		str		= str +	'  <li><a href="#" class="menubar">Fundo de Aval</a></li>';
		str		= str +	'  <li><a href="#" class="menubar">Relat?rio</a></li>';
		str	= str +	'	</ul>';
	 
		 document.write(str);
		 return; 	
}
