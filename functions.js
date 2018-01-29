var value_table = [
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0]
	]

function initialize(){
	value_table = [
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0]
	]
	value_table = randomizer(value_table)
	displayTable(value_table)
}

$(document).keyup(function(e){
	switch(e.which){
		case 37: //left
			moveLeft(value_table);
			break;
		case 38: //up
			moveUp(value_table);
			break;
		case 39: //right
			moveRight(value_table);
			break;
		case 40: //down
			moveDown(value_table);
			break;
		default:return ;
	}
	e.preventDefault();
});

function randomizer(object){
	var free_spaces = [];
	var table = object;
	for (var i = 0; i <5; i++) {
		for (var j = 0; j < 5; j++) {
			if (table[i][j] == 0) {
				free_spaces.push([i,j])
			}
		}
	}
	var len = free_spaces.length
	var rand =Math.floor(Math.random()*(len-1))
	var rand_coord = free_spaces[rand];

	var prob = Math.random();
	if(prob < 0.21){
		table[rand_coord[0]][rand_coord[1]] = 4
	} else{
		table[rand_coord[0]][rand_coord[1]] = 2
	}
	$("#"+(rand_coord[0]+1))
	return table
}

function displayTable(object){
	var table = object;
	for(var i = 0; i<5; i++){
		for(var j = 0; j<5; j++){
			if(table[i][j] == 2){
				$("#" + (i+1) + (j+1)).text(table[i][j]);
				$("#" + (i+1) + (j+1)).css({"background-color":"","color":""});
				$("#"+(i+1)+(j+1)).css({"background-color":"#BDBDBD","color":"black"});
			} else if(table[i][j] == 4){
				$("#" + (i+1) + (j+1)).text(table[i][j]);
				$("#" + (i+1) + (j+1)).css({"background-color":"","color":""});
				$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"black"});
			} else if(table[i][j] == 8){
				$("#" + (i+1) + (j+1)).text(table[i][j]);
				$("#" + (i+1) + (j+1)).css({"background-color":"","color":""});
				$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"black"});
			} else if(table[i][j] == 16){
				$("#" + (i+1) + (j+1)).text(table[i][j]);
				$("#" + (i+1) + (j+1)).css({"background-color":"","color":""});
				$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"black"});
			} else if(table[i][j] == 32){
				$("#" + (i+1) + (j+1)).text(table[i][j]);
				$("#" + (i+1) + (j+1)).css({"background-color":"","color":""});
				$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"black"});
			} else if(table[i][j] == 64){
				$("#" + (i+1) + (j+1)).text(table[i][j]);
				$("#" + (i+1) + (j+1)).css({"background-color":"","color":""});
				$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"black"});
			} else if(table[i][j] == 128){
				$("#" + (i+1) + (j+1)).text(table[i][j]);
				$("#" + (i+1) + (j+1)).css({"background-color":"","color":""});
				$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"black"});
			} else if(table[i][j] == 256){
				$("#" + (i+1) + (j+1)).text(table[i][j]);
				$("#" + (i+1) + (j+1)).css({"background-color":"","color":""});
				$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"black"});
			} else if(table[i][j] == 512){
				$("#" + (i+1) + (j+1)).text(table[i][j]);
				$("#" + (i+1) + (j+1)).css({"background-color":"","color":""});
				$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"black"});
			} else if(table[i][j] == 1024){
				$("#" + (i+1) + (j+1)).text(table[i][j]);
				$("#" + (i+1) + (j+1)).css({"background-color":"","color":""});
				$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"black"});
			}
			else{
				$("#" + (i+1) + (j+1)).text("");
				$("#" + (i+1) + (j+1)).css({"background-color":"#afafaf","color":"black"});


			}
		}
	}
}

function colorFiller(i,j){
	var tile_value = value_table[i][j]
	if (tile_value = 2){
		$("#"+(i+1)+(j+1)).css({"background-color":"#BDBDBD","color":"#212121"});
	} else if (tile_value = 4){
		$("#"+(i+1)+(j+1)).css({"background-color":"#BDBDBD","color":"#212121"});
	} else if (tile_value = 8){
		console.log("hello")
		$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"#212121"});
	} else if (tile_value = 16){
		$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"#212121"});
	} else if (tile_value = 32){
		$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"#212121"});
	} else if (tile_value = 64){
		$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"#212121"});
	} else if (tile_value = 128){
		$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"#212121"});
	} else if (tile_value = 256){
		$("#"+(i+1)+(j+1)).css({"background-color":"#CFD8DC","color":"#212121"});
	} else if (tile_value = 512){
		$("#"+(i+1)+(j+1)).css({"background-color":"#455A64","color":"#FFFFFF"});
	}
}

function moveLeft(object){
	var table = object;
	for(var i = 0; i <5; i++){
		var row = table[i];
		var newrow = [];
		for(var j = 0; j<5; j++){
			if( row[j] != 0 ){
				newrow.push(row[j]);
			}
		}
		while(newrow.length < 5){
			newrow.push(0)
		}
		newrow = addNumbers(newrow)
		table[i] = newrow
	}
	// value_table = table;
	// value_table = randomizer(value_table);
	// displayTable(value_table)
	if (value_table == table){
		displayTable(value_table)
	}
	else{
		value_table = randomizer(table);
		displayTable(value_table)
	}
	
}
function moveRight(object){
	var table = object;
	for(var i = 0; i <5; i++){
		var row = table[i];
		var newrow = [];
		for(var j = 4; j>-1; j--){
			if( row[j] != 0 ){
				newrow.push(row[j]);
			}
		}
		while(newrow.length < 5){
			newrow.push(0)
		}
		newrow = addNumbers(newrow);
		table[i] = newrow.reverse();
	}
	value_table = table;
	value_table = randomizer(value_table);
	displayTable(value_table)
}

function moveUp(object){
	var table = object;
	for(var j = 0; j <5; j++){
		var newcolmn =[];
		for(var  i= 0; i<5; i++){
			if( table[i][j] != 0 ){
				newcolmn.push(table[i][j]);
			}
		}
		while(newcolmn.length < 5){
			newcolmn.push(0)
		}
		newcolmn = addNumbers(newcolmn);
		for(var i = 0; i<5; i++){
			table[i][j] = newcolmn[i];
		}
	}
	value_table = table;
	value_table = randomizer(value_table);
	displayTable(value_table)
}

function moveDown(object){
	var table = object;
	for(var j = 4; j>-1; j--){
		var newcolmn =[];
		for(var  i= 4; i>-1; i--){
			if( table[i][j] != 0 ){
				newcolmn.push(table[i][j]);
			}
		}
		while(newcolmn.length < 5){
			newcolmn.push(0)
		}
		newcolmn = addNumbers(newcolmn)
		for(var i = 0; i<5; i++){
			table[i][j] = newcolmn[4-i];
		}
	}
	value_table = table;
	value_table = randomizer(value_table);
	displayTable(value_table)
}

function addNumbers(object){
	var row = object;
	var new_row = []
	for(var i = 0; i<row.length; i++){
		if(row[i] == row[i+1]){
			new_row.push(row[i] + row[i+1])
			i++;
		}
		else{
			new_row.push(row[i])
		}
	}
	while(new_row.length<5){
		new_row.push(0);
	}
	return new_row

}


	
