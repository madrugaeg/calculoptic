// JavaScript Document

//Para todas las ventanas

       	var txtCantConectores = 0;
		var txtCantEmpalmes = 0;
		var txtLongCable = 0;
		var txtSplitters12 = 0;
		var txtSplitters14 = 0;
		var txtSplitters18 = 0;
		var txtSplitters116 = 0;
		var txtSplitters132 = 0;
		var resultado = 0;
		
		var txtN1 = 0;
		var txtN2 = 0;
		var txtAnguloCritico = 0;
		var txtAperturaNumerica = 0;
		var txtAnguloAceptacion = 0;
		
		var txtMWaDBM = 0;

function validarSiNumero(numero, id){
    if (!/^\d+\.?\d*$/.test(numero)){
		alert("El valor " + numero + " no es un número");
	} else {
		if(id == "txtCantConectores") {
			txtCantConectores = numero;
		} 
		if(id == "txtCantEmpalmes") {
			txtCantEmpalmes = numero;
		}
		if(id == "txtLongCable") {
			txtLongCable = numero;
		}
		if(id == "txtSplitters12") {
			txtSplitters12 = numero;
		}
		if(id == "txtSplitters14") {
			txtSplitters14 = numero;
		}
		if(id == "txtSplitters18") {
			txtSplitters18 = numero;
		}
		if(id == "txtSplitters116") {
			txtSplitters116 = numero;
		}
		if(id == "txtSplitters132") {
			txtSplitters132 = numero;
		}
		if(id == "txtN1") {
			txtN1 = numero;
		}
		if(id == "txtN2") {
			txtN2 = numero;
		}
		if(id == "txtMWaDBM") {
			txtMWaDBM = numero;
		}
	}
}

//Ventana Presupuesto Optico
	
function calcularDB() {
	var total = (txtCantConectores * 0.5) + (txtCantEmpalmes * 0.1) + (txtLongCable * 0.35) + (txtSplitters12 * 3.5) + (txtSplitters14 * 7) + (txtSplitters18 * 10.5) + (txtSplitters116 * 14) + (txtSplitters132 * 17.5);
	return total;
}

//Ventana Calculadora
function calcularAC() {
	var AC = Math.asin( (txtN2 / txtN1) );
	AC = (180 * AC) / Math.PI;
	return	(Math.round(AC * 100) / 100);
}

function calcularAN() {
	var AN =  Math.sqrt( (txtN1 * txtN1) - (txtN2 * txtN2) );
	return Math.round(AN * 100) / 100;
}

function calcularAA() {
	var AA = Math.asin(Math.sqrt( (txtN1 * txtN1) - (txtN2 * txtN2) ));
	AA = (180 * AA) / Math.PI;
	return (Math.round(AA * 100) / 100);
}

//Ventana Atenuacion

function calcularMWaDBM() {
	var MWaDBM = (10 * (Math.log(txtMWaDBM) / (Math.log(10)) ));
	return (Math.round(MWaDBM * 100) / 100);
}