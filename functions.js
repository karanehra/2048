var value_table = [
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0]
	]

function initialize(){
	value_table = randomizer(value_table)
	displayTable(value_table)
}

$(document).keydown(function(e){
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
	table[rand_coord[0]][rand_coord[1]] = 2
	return table
}

function displayTable(object){
	var table = object;
	for(var i = 0; i<5; i++){
		for(var j = 0; j<5; j++){
			if(table[i][j] != 0){
				$("#" + (i+1) + (j+1)).text(table[i][j]);
				$("#" + (i+1) + (j+1)).addClass("filled");
			}
			else{
				$("#" + (i+1) + (j+1)).text("");
				$("#" + (i+1) + (j+1)).removeClass("filled");

			}
		}
	}
}

function moveLeft(object){
	console.log("hels left")
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
	value_table = table;
	value_table = randomizer(value_table);
	displayTable(value_table)
}
function moveRight(object){
	console.log("hels")
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
	console.log("hels up")
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
	console.log("hels up")
	var table = object;
	for(var j = 4; j>-1; j--){
		var newcolmn =[];
		for(var  i= 0; i<5; i++){
			if( table[i][j] != 0 ){
				newcolmn.push(table[i][j]);
			}
		}
		while(newcolmn.length < 5){
			newcolmn.push(0)
		}
		newcolmn = addNumbers(newcolmn)
		newcolmn.reverse();
		for(var i = 0; i<5; i++){
			table[i][j] = newcolmn[i];
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
	
