function BP_ConfirmaSaida(){
	question = confirm("Deseja realmente sair do sistema?")
	if (question !="0"){
		window.close();
	}
}

function getObj(id){
	return document.getElementById(id);
}

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
function trim(s) {
    return s.replace( /^\s*/, "" ).replace( /\s*$/, "" );
}
function AbrePagina(href, target)
{

	window.location = href;
	
}//fim function


