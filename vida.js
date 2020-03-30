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

}