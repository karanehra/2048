var value_table = [
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0]
	]
	
function initialize(){
	console.log(randomizer(value_table))
	displayTable(randomizer(value_table))
}

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
				$("#" + i + j).text(table[i][j]);
				$("#" + i + j).addClass("filled");
			}
		}
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
		while(newrow.length < 6){
			newrow.add(0)
		}
		table[i] = newrow
	}
}
