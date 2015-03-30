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
		var txtDBMaMW = 0;
		var txtDBin = 0;
		var txtDBout = 0;
		var txtMWin = 0;
		var txtMWout = 0;
		
		var cableSeleccionado = 0;
		var txtFibra = 0;
		var colorFibra = 0;
		var colorTubo = 0;
		var fibrasXtubo = 0;

function validarSiNumero(numero, id){
    if (!/^\d+\.?\d*$/.test(numero)){
		alert("El valor " + numero + " no es un n\xfamero");
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
		if(id == "txtFibra") {
			txtFibra = numero;
		}
	}
}
function validarSiNumeroReal(numero, id){
	 if (!/^-?\d+(\.\d+)?$/.test(numero)){
		alert("El valor " + numero + " no es un n\xfamero");
	} else {
			if(id == "txtMWaDBM") {
			txtMWaDBM = numero;
		}
		if(id == "txtDBMaMW") {
			txtDBMaMW = numero;
		}
		if(id == "txtDBin") {
			txtDBin = numero;
		}
		if(id == "txtDBout") {
			txtDBout = numero;
		}
		if(id == "txtMWin") {
			txtMWin = numero;
		}
		if(id == "txtMWout") {
			txtMWout = numero;
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

function calcularDBMaMW() {
	var DBMaMW = ( Math.pow(10, (txtDBMaMW / 10) ) );
	return (Math.round(DBMaMW * 100) / 100);
}

function calcularAtenDB() {
	var atenDB = txtDBout - txtDBin;
	return atenDB;
}

function calcularGanancia() {
	var ganancia = txtMWout / txtMWin;
	return (Math.round(ganancia * 1000000) / 1000000);;
}

//Ventana Codigo de Colores
