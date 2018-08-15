//variaveis global
var numClicks = 0;
var radioGlobal ;

// -----------------------------------------------------------------------------
//  Fun para limpar formularios
//  Fun Genca
// -----------------------------------------------------------------------------

// funcionalidade q verifica se a tecla Control esta pressionada

function SelecionaTodosChecks(spanChk){
   var oItem = spanChk.children;
   var theBox= (spanChk.type=="checkbox") ? 
    spanChk : spanChk.children.item[0];
   xState=theBox.checked;
   elm=theBox.form.elements;
   for(i=0;i<elm.length;i++)
    if(elm[i].type=="checkbox" && 
      elm[i].id!=theBox.id)
    {
    if(elm[i].checked!=xState)
     elm[i].click();
    }
  }


function teste(id){
document.getElementById("ctl00_ContentPlaceHolder1_BtConsultar").disabled = false;
document.getElementById("ctl00_ContentPlaceHolder1_BtAlterar").disabled = false;
document.getElementById("ctl00_ContentPlaceHolder1_SequencialHidden").value = document.getElementById(id).value;
}

function mascaraCpfCnpj(event, id)
{ 
var keyCode = (getBrowser() == "Internet Explorer") ? event.keyCode : event.charCode;
var aux = document.getElementById(id).value;
if ((aux.length==3)&&keyCode!=8){
	var aux2 = aux.substring(0,3)+'.';
    document.getElementById(id).value=aux2;
   }
 else  
   if ((aux.length==7)&& (keyCode != 8)) 
   {
   	var aux2 = aux.substring(0,7)+'.';
    document.getElementById(id).value=aux2;
   }
   else if ((aux.length==11)  && (keyCode !=8))
   {
      	var aux2 = aux.substring(0,11)+'-';
       document.getElementById(id).value=aux2;
   
   }   
   else if ((aux.length==15)  && (keyCode !=8)){
   	var aux2 = aux.substring(0,3)+aux.substring(4,7)+aux.substring(8,11)+aux.substring(12,18);
   	//3720
   	//99.999.999/9999-99
   	var aux3 = aux2.substring(0,2)+'.'+aux2.substring(2,5)+'.'+aux2.substring(5,8)+'/'+aux2.substring(8,12)+'-';
   	document.getElementById(id).value = aux3;
   
   }
}

	function mascaraTelefone(id, event)	{
	var keyCode = (getBrowser() == "Internet Explorer") ? event.keyCode : event.charCode;
	var aux = document.getElementById(id).value;
	
	if ((aux.length==1)&&keyCode!=8){
	     document.getElementById(id).value='('+document.getElementById(id).value;
		}
	else
	if ((aux.length==3)&&keyCode!=8){
	var aux2 = aux.substring(0,3)+')';
    document.getElementById(id).value=aux2;
	   }
	 else  
	   if ((aux.length==8)&& (keyCode != 8)) 
	   {	   	var aux2 = aux.substring(0,8)+'-';
	    document.getElementById(id).value=aux2;
   		}
	
	}
	function mascaraCep(id, event)	{
	var keyCode = (getBrowser() == "Internet Explorer") ? event.keyCode : event.charCode;
	var aux = document.getElementById(id).value;
//	99.999-999
	if ((aux.length==2)&&keyCode!=8){
	var aux2 = aux.substring(0,2)+'.';
    document.getElementById(id).value=aux2;
	   }
	 else  
	   if ((aux.length==6)&& (keyCode != 8)) 
	   {	   	var aux2 = aux.substring(0,6)+'-';
	    document.getElementById(id).value=aux2;
   		}
	
	}

	function mascaraData(id, event)	{
	var keyCode = (getBrowser() == "Internet Explorer") ? event.keyCode : event.charCode;
	var aux = document.getElementById(id).value;
	if ((aux.length==2)&&keyCode!=8){
	var aux2 = aux.substring(0,2)+'/';
    document.getElementById(id).value=aux2;
	   }
	 else  
	   if ((aux.length==5)&& (keyCode != 8)) 
	   {	   	var aux2 = aux.substring(0,5)+'/';
	    document.getElementById(id).value=aux2;
   		}
	
	}
	
function mascaraDataHora(id, event)	{
	var keyCode = (getBrowser() == "Internet Explorer") ? event.keyCode : event.charCode;
	var aux = document.getElementById(id).value;
	if ((aux.length==2)&&keyCode!=8){
	 var aux2 = aux.substring(0,2)+'/';
	    document.getElementById(id).value=aux2;
	   }
	 else  
	   if ((aux.length==5)&& (keyCode != 8)) 
	   {	   	var aux2 = aux.substring(0,5)+'/';
	    document.getElementById(id).value=aux2;
   		} else if ((aux.length==10)&& (keyCode != 12)) {
   		   var aux2 = aux.substring(0,10)+' ';
	       document.getElementById(id).value=aux2;
   		} else if ((aux.length==13)&& (keyCode != 15)) {
   		   var aux2 = aux.substring(0,13)+':';
	       document.getElementById(id).value=aux2;
   		}
   		
}

function Valida_Numeros(evt){
    var keyCode = (getBrowser() == "Internet Explorer") ? evt.keyCode : evt.charCode;
	if(keyCode != 0)
		var out = (keyCode >= 48 && keyCode <= 57)? true : false;
	return out;
}
function formataInteiro(campo, teclapres) {
    var tecla = (getBrowser() == "Internet Explorer")?teclapres.keyCode:teclapres.which;
    if ( (tecla == 0) || (tecla == 8) || (tecla >= 48 && tecla <= 57)) {       
        if ( (tecla == 0) || (tecla == 8) )
            return true;
        //formataNumero(campo, teclapres);
        return true;
    } else {
        return false;
    }
}


function troca(str,strsai,strentra) {
	while(str.indexOf(strsai)>-1)
		str = str.replace(strsai,strentra);
	return str;
}
function converteNumero(str) {
	str = troca(str,".","");
	str = troca(str,",",".");
	return parseFloat(str);
}

// vari?veis globais
var sepDecimal = ",";
var sepMilhar = ".";

//Formata valor numerico
function formataNumeroMonetario(campo, evento, numPonIZP, numDecsIZP, numMax) {
    
	var tecla = (getBrowser() == "Internet Explorer")?evento.keyCode:evento.which;
	
	if (((tecla >= 48) && (tecla <=57)) || ((tecla >= 96) && (tecla <= 105)) || (tecla == 8) || (tecla == 46)) {
	
		sepDecimal = (numDecsIZP == 0) ? "" : ",";
	
		objCampo = document.getElementById(campo);
		var strCampo = objCampo.value;
		
		if ((numMax) && (((tecla >= 48) && (tecla <=57)) || ((tecla >= 96) && (tecla <= 105))))  {
			if (converteNumero(strCampo)*10 > numMax) {
				tam = strCampo.length;
				objCampo.value = strCampo.substr(0,tam-1);
				return;
			}
		}
		
		strCampo = troca(strCampo,",","");
		strCampo = troca(strCampo,".","");

		while ((strCampo.length>1) && (strCampo.substr(0,1)=="0"))
			strCampo = strCampo.substr(1, strCampo.length);

		var tam = strCampo.length;
		var nStr = "";

		if (tam == 0) return;
		
		if (tam <= numDecsIZP) {
			var i = tam;
			while (i < numDecsIZP) {
				nStr += "0";
				i++;
			}
			nStr = "0" + sepDecimal + nStr + strCampo;
		}
		else {
			var resto = (tam - numDecsIZP) % numPonIZP;
			var aux = (resto != 0) ? resto : numPonIZP;
			
			nStr += strCampo.substr(0,aux);
			strCampo = strCampo.substr(aux);
			tam = strCampo.length;
	
			while (tam >= (numDecsIZP + numPonIZP)) {
				nStr += sepMilhar + strCampo.substr(0,numPonIZP);
				strCampo = strCampo.substr(numPonIZP);
				tam = strCampo.length;
			}
			nStr += sepDecimal + strCampo.substr(0,numDecsIZP);
		}
		
		objCampo.value = nStr;
			
    }
	
}

function formClean(formName) {
	var form = getObj(formName);
	for(var i=0; i < form.length; i++){
		switch(form[i].type){
			case "text":
				form[i].value = "";
			break;
			case "hidden":
				form[i].value = "";
			break;
			case "textarea":
				form[i].value = "";
			break;
			case "select-one":
				form[i].selectedIndex = 0;
			break;
			case "select-multiple":
				var j = 0;
				form[i].selectedIndex = -1;
			break;
			case "checkbox":
				form[i].checked = false;
			break;
			case "radio":
				form[i].checked = false;
			break;
		}
		
	}
	
}

//Adiciona elementos no combo
function addFile() {

	var file = document.getElementById("targetPath");
	var target = document.getElementById("cdFiles");
	var text = file.value.substring(file.value.lastIndexOf("/")+1,file.value.length);
    //var text = file.value;
	var value = file.value;
    
    if (text == "") {
        return false;    
    }
    for (i=0; i<target.options.length; i++) {
        var opval = target.options[i].value;
        opval = opval.substring(opval.lastIndexOf("/")+1,opval.length);
        //if (value == target.options[i].value) {
        if (text == opval) {
            return false;
        }
    }

	target.options[target.options.length] = new Option(text, value);
    textfile = value;
    haschanged = false;
}

//Remove os selecionados no combo
function removeFile() {

	var target = document.getElementById("cdFiles");

	for (var i = target.options.length-1;  i >= 0; i--) {
		if(target.options[i].selected)target.options[i] = null;
	}
	
}

// Seta 'checked' em todos os checkbox do 'form' com nome 'cbName',
// habilitando ou desabilitando 'button'
function checkAll(form, cbName, checked, button1, button2)
{
	for (i=0; i<form.length; ++i) {
	    if (form.elements[i].name == cbName) {
	      form.elements[i].checked=checked;
	    }
	}
	if (checked) {
		button1.disabled=false;
		button2.disabled=false;
	} else {
		button1.disabled=true;
		button2.disabled=true;
	}
}

// Habilita ou desabibilita o botao 'button' depedendo de alguma checkbox
// com nome 'cbName' no form 'form' estar marcada.
function enableButton(form, cbName, button1, button2)
{
	var checked = false;
	for (var i=0; i<form.length; ++i) {
		if (form.elements[i].name == cbName) {
		    if (form.elements[i].checked) {
				checked = true;
				break;
		    }
		}
	}

	if (checked) {
		button1.disabled=false;  
		button2.disabled=false;  
	} else {
		button1.disabled=true;
		button2.disabled=true;
	}
}

// Seleciona todos os arquivos do select de arquivos para gravacao 
// antes do submit
function selectAll(select) {
	for (var i=0; i<select.length; i++) {
		select.options[i].selected = "selected";
	}
}

// Abre uma janela popup com a url
function openPopup(url) {
    window.open(url,"new_popup",
    "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=800, height=500, top=70, left=100")
}

// -----------------------------------------------------------------------------
//  Fun para submeter um formulario dinamicamente
//  Fun Genca
// -----------------------------------------------------------------------------
function submitForm(formObj) {
	alert(formObj);
	if(formObj != null){
		alert("1");
		removerEspacos(formObj);
		alert("2");
		formObj.submit();
		alert("3");
	}
	alert("4");
}

// -----------------------------------------------------------------------------
//  Fun para submeter um formulario dinamicamente
//  Fun Genca
// -----------------------------------------------------------------------------
function actionForm(strForm,action,target) {

	var form = getObj(strForm);
	var action = action;
	var target = target;
	if(form != null && action != null && target != null){
		form.action = action;
		form.target = target;
		removerEspacos(strForm);
		form.submit();
	}
}

// Trim whitespace from left and right sides of s.
function trim(s) {
    return s.replace( /^\s*/, "" ).replace( /\s*$/, "" );
}

// -----------------------------------------------------------------------------
//  Fun para retirar espa?oes em branco entre a direita e esquerda
//
// -----------------------------------------------------------------------------
function removerEspacos(formName){
	var form = getObj(formName);
	for(var i=0; i < form.length; i++){
		switch(form[i].type){
			case "text":
				form[i].value = trim(form[i].value);
			break;
		}	
	}
}

function getObj(id){
	return document.getElementById(id);
}

function startClick(radio) {
    numClicks++;
    
    switch(numClicks) {
        case 2:
            if(radioGlobal == radio.value)
	    {
	    	check(radio);
	    }
	    numClicks = 0;
            break;
        case 1:
	    radioGlobal = radio.value;
            break;
    }
}
function check(radio)
{
	if(radio.checked == false)
	{
		radio.checked = true
		return;
	} else {
		radio.checked = false
		return;
	}	
}


function createInput()
{
	var lastRow = 9;
	//var lastRow = 11;
	var table = document.getElementById('tableId');
	var row = table.insertRow(table.rows.length);
	var x=document.getElementById("myText")
	//alert("ultima coluna: " + table.rows.length);
	for (var f = table.rows.length; f >= lastRow; f--)
	{
		try
		{
			table.deleteRow(f);
		}
		catch(e)
		{}

	}
    //var table = document.createElement("table");
    for (var y = 0; y < x.value; y++)
	{
		var row = table.insertRow(table.rows.length);
		row.setAttribute('class','messageRowHeader');
		var col1 = row.insertCell(0);
		var col2 = row.insertCell(1);
        var count = parseInt(y) + parseInt(1);
        var textfield1 = document.createElement("input");
        textfield1.name ="cellsNames"
        textfield1.setAttribute('value' ,'mupc'+count);
        textfield1.setAttribute('readonly' ,'true');
        textfield1.setAttribute('class','messageHeader');
        var text1 = document.createTextNode('Nome da C?lula ' + count);

		
		var radio = document.createElement("input")
		radio.setAttribute('type','radio');
		radio.setAttribute('name','serverName');
		radio.setAttribute('value','mupc'+count);
		radio.setAttribute('onClick' ,'startClick(this)')
		
		var text2 = document.createTextNode('Servidor');
		col1.setAttribute('class','messageRowHeader');
		col2.setAttribute('class','messageRowHeader');
		radio.setAttribute('class','messageRowHeader');
		col1.appendChild(text1);
		col1.appendChild(document.createElement("br"));
		col1.appendChild(textfield1);
		col2.appendChild(text2);
		col2.appendChild(document.createElement("br"));
		col2.appendChild(radio);
	}
		var radio1 = document.createElement("input")
		radio1.setAttribute('type','radio');
		radio1.setAttribute('name','serverName');
		radio1.setAttribute('value','lcc');
		radio1.setAttribute('onClick' ,'startClick(this)')
		radio1.setAttribute('class','messageHeader');
		radio1.setAttribute('checked','true');
		var col3 = row.insertCell(2);
        col3.setAttribute('class','messageRowHeader');
		var text3 = document.createTextNode('Servidor lcc');

		col3.appendChild(text3);
		col3.appendChild(document.createElement("br"));
		col3.appendChild(radio1);
		
}
function popularInput(listaCelulas , servidor)
{
	var table = document.getElementById('tableId');
	var row = table.insertRow(table.rows.length);
	row.setAttribute('class','messageRowHeader');
	var x=document.getElementById("myText")
	for (var y = 0; y < x.value; y++)
	{
		var valor = listaCelulas[y];
		var row = table.insertRow(table.rows.length);

		var col1 = row.insertCell(0);
		var col2 = row.insertCell(1);
        
		
        var textfield1 = document.createElement("input");
        textfield1.name ="cellsNames"
        textfield1.setAttribute('value' ,valor)
        var count = parseInt(y) + parseInt(1);
        var text1 = document.createTextNode('Nome da C?lula ' + count);
		var radio = document.createElement("input");
		radio.setAttribute('type','radio');
		radio.setAttribute('name','serverName');
		radio.setAttribute('value',''+count);
		radio.setAttribute('onClick' ,'startClick(this)')
		
		if(servidor == valor)
		{
			radio.setAttribute('checked','true');	
		}
		var text2 = document.createTextNode('Servidor');
		col1.setAttribute('class','messageRowHeader');
		col2.setAttribute('class','messageRowHeader');
		radio.setAttribute('class','messageRowHeader');
		textfield1.setAttribute('class','messageRowHeader');
		col1.appendChild(text1);
		col1.appendChild(document.createElement("br"));
		col1.appendChild(textfield1);
		col2.appendChild(text2);
		col2.appendChild(document.createElement("br"));
		col2.appendChild(radio);
	}
	
		var radio1 = document.createElement("input")
		radio1.setAttribute('type','radio');
		radio1.setAttribute('name','serverName');
		radio1.setAttribute('value',''+count);
		radio1.setAttribute('onClick' ,'startClick(this)')
		radio1.setAttribute('class','messageRowHeader');
		if(servidor == 'lcc')
		{
			radio1.setAttribute('checked','true');	
		}
		var col3 = row.insertCell(2);
		col3.setAttribute('class','messageRowHeader');
		var text3 = document.createTextNode('Servidor lcc');
		col3.appendChild(text3);
		col3.appendChild(document.createElement("br"));
		col3.appendChild(radio1);
	
}


function getDigitalCenter()
{
	var id = document.forms[0].digitalCenterId.value;
	document.forms[0].action="../regdigitalcenter.do?op=selecionar&digitalCenterId="+id;
    document.forms[0].submit();	
}

function getCelulas(action)
{
	var id = document.forms[0].digitalCenter.value;
	document.forms[0].action="../"+action+"?op=preencherCelulas&digitalCenterId="+id;
    document.forms[0].submit();	
}
function desabilitarMatriculaCelula()
{
	var form1 = document.forms[0];
	var cells = document.forms[0].cell.value;
	var terminal = document.forms[0].terminal.value;
	try {
		form1.type.disabled = false;
	} catch(e){}
	
	if(cells != "")
	{
		document.forms[0].userId.value = "";
		document.forms[0].userId.disabled = true;
		if(terminal == "0"){
			form1.type.selectedIndex = '1';	
		}
		
	} else if(terminal == "0"){
		document.forms[0].userId.disabled = false;
		form1.type.selectedIndex = '0';	
	}
}

function desabilitarMatriculaTerminal()
{
	var cells = document.forms[0].cell.value;
	var terminal = document.forms[0].terminal.value;
	var form1 = document.forms[0];
	try {
		form1.type.disabled = false;
	} catch(e){}
	if(terminal != "0")
	{
		document.forms[0].userId.value = "";
		document.forms[0].userId.disabled = true;
		form1.type.selectedIndex = '0';
	} else if(cells == ""){
		document.forms[0].userId.disabled = false;
		form1.type.selectedIndex = '0';	
	} else {
		form1.type.selectedIndex = '1';	
	}
}

function desabilitarTipoProcesso (){
	var form1 = document.forms[0];
	form1.type.selectedIndex = '0';
}


function definirTodosTerminal()
{
	var cells = document.forms[0].cell.value;
	if(cells == "0")
	{
	    //try{
		//	document.forms[0].digitalCenter.value = "";
		//	document.forms[0].digitalCenter.disabled = true;
		//} catch(e){}
		document.forms[0].terminal.value = "0";
		document.forms[0].terminal.disabled = true;
	} else {
		document.forms[0].terminal.value = "0";
		document.forms[0].terminal.disabled = false;
		//try{
		//	document.forms[0].digitalCenter.value = "";
		//	document.forms[0].digitalCenter.disabled = false;
		//} catch(e){}
		
	}
}

function desabilitarMatricula(){
	var all = document.forms[0].selectedUser.checked;
	if(all == true){
		document.forms[0].userId.value = "";
		document.forms[0].userId.disabled = true;
	} else {
		document.forms[0].userId.disabled = false;
	}
}

function acceptOnly(expressao, event)
{
  var er = new RegExp(expressao);
  var keyCode = event.which ? event.which : event.keyCode;
  return er.test(String.fromCharCode(keyCode)) || keyCode == 8 ||
    keyCode == 9  || keyCode == 35 || keyCode == 36 || keyCode == 37 ||
      keyCode == 39 ;
}
function selecionarMatriculasAll()
{
	for(var i=0;i<document.userOperationForm.ids.length;i++)
	{
  		document.userOperationForm.ids[i].checked=eval(document.userOperationForm.all.checked);
  	}
}
function selecionarDigitalCenterAll()
{
	for(var i=0;i<document.digitalCenterOperationForm.ids.length;i++)
	{
  		document.digitalCenterOperationForm.ids[i].checked=eval(document.digitalCenterOperationForm.all.checked);
  	}
}




