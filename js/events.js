function counter(){
		if (typeof(Storage) !== undefined) {
			if (sessionStorage.clickcount) {
				sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
			}
			else{
				sessionStorage.clickcount = 1;
			}
		}
	
	console.log("You clicked the button " + sessionStorage.clickcount + " times");
}