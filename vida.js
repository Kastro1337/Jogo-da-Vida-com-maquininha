lista = [];
cont = 0;
not = 0
for(y = 0; y<10;y++){
	lista[y] = [];
	for(x = 0; x < 10; x++){
		lista[y][x] = 0;
	}
}
//matriz 10x10

lista[1][0] = 1
lista[1][1] = 1
lista[1][2] = 1


//listaNova = lista; // Isso nao pode ocorrer
					 // pois salvara no mesmo espaco de memoria
					 // lista === listaNova
listaNova = [];
for(y = 0; y<10;y++){
	listaNova[y] = [];
	for(x = 0; x < 10; x++){
		listaNova[y][x] = 0;
	}
}

function aperta(){
for(y = 0; y<10;y++)
	{
	
	for(x = 0; x < 10; x++)
		{
			
			cont = 0;
			not = 0;
			try{
			if(lista[y-1][x-1] == 1){cont++;}
		}
			catch{}
			try{
			if(lista[y-1][x] == 1){cont++;}
		}
		catch{}
			try{
			if(lista[y-1][x+1] ==1){cont++;}
		}
		catch{}
			try{
			if(lista[y][x-1] ==1){cont++;}
		}
		catch{}
			//jump itself
			try{
			if(lista[y][x+1] ==1){cont++;}
		}
		catch{}
			try{
			if(lista[y+1][x-1] ==1){cont++;}
		}
		catch{}
			try{
			if(lista[y+1][x] ==1){cont++;}
		}
		catch{}
			try{
			if(lista[y+1][x+1] ==1){cont++;}

			}
			catch{}

		if(cont < 2){listaNova[y][x] = 0;}
		if(cont == 2){listaNova[y][x] = lista[y][x]}
		if(cont > 3){listaNova[y][x] = 0;}
		if(cont == 3){listaNova[y][x] = 1;}
		//console.log(cont,'x=',x,'y=',y)			
		}
	}



for(y = 0; y<10;y++){
	for(x = 0; x < 10; x++){
		lista[y][x] = listaNova[y][x];
	}
}

for(y = 0; y<10;y++){
	listaNova[y] = [];
	for(x = 0; x < 10; x++){
		listaNova[y][x] = 0;
	}
}

	gerarBotao();
}

function trocaValor(x,y){
	
	lista[y][x] == 0 ? lista[y][x] = 1 : lista[y][x] = 0;
	gerarBotao();
	
}

function marcar(){
	x = document.getElementById('marcarX').value;
	y = document.getElementById('marcarY').value;
	lista[y][x] == 0 ? lista[y][x] = 1 : lista[y][x] = 0;
	gerarBotao();

}
/*
function startstop(){
	text = document.getElementById("start").innerText;
	text == "start" ? text = "stop" : text = "start";
	document.getElementById("start").innerText = text;
}*/

// Graphics ↓

document.body.innerHTML += "<div id='box'>";
box = document.getElementById("box");

function gerarBotao(){
	
	box.innerHTML = ''
	for(j = 0; j < 10; j++){
		for(i = 0; i < 10; i++){
			if(lista[j][i] == 0){
				box.innerHTML += "<button id = 'botao' valorX = "+i+" valorY = "+j+" onclick = 'trocaValor("+i+","+j+");'></button> "
			}
			else{
				box.innerHTML += "<button id = 'botao' style = 'background-color:red;' onclick = 'trocaValor("+i+","+j+")'></button> "
			}
		}
		box.innerHTML += "<br>"
	}
	
}



gerarBotao();