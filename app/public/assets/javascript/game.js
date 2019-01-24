$(document).ready(function() {

	let randomNum = 0;
	let wins = 0;
	let losses = 0;
	let playerNum = 0;
	let oneToThree = 0;

	const randomStartingNum = () => {
	    randomNum = Math.floor(Math.random() * 42)+19;
	    $("#randomNumber").html("<h2 id='text2'>"+randomNum+"</h2>");
	    playerNum = 0;
	    randomGame();
	}

	const randomGame = () => {
	    oneToThree = Math.floor(Math.random() * 3)+1;
	    if (oneToThree === 1) {
	    	playerNum = 0;
	    	gameOne();
	    } else if (oneToThree === 2) {
	    	playerNum = 0;
	    	gameTwo();
	    } else {
	    	playerNum = 0;
	    	gameThree();
	    }
	}

	randomStartingNum();

	const didYouWin = () => {
		if (playerNum === randomNum) {
		    wins++;
		    $("#winsLosses").html("<h2 id='text'>You Win!!<br>Wins:"+ wins +"<br>Losses:"+ losses +"</h2>");       
			playerNum = 0;
			$("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			randomStartingNum();
		} else if (playerNum > randomNum) {
		    losses++;
		    $("#winsLosses").html("<h2 id='text'>You Lost!!<br>Wins:"+ wins +"<br>Losses:"+ losses +"</h2>");
		    playerNum = 0;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
		    randomStartingNum();
		}
	}

	const gameOne = () => {
		$("#crystalOne").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 8;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+8;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>"); 
		    didYouWin();
		});

		$("#crystalTwo").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 6;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+6;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			didYouWin();
		});

		$("#crystalThree").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 4;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+4;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			didYouWin();
		});

		$("#crystalFour").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 3;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+3;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			didYouWin();
		});
	}

	const gameTwo = () => {
		$("#crystalTwo").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 8;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+8;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>"); 
		    didYouWin();
		});

		$("#crystalThree").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 6;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+6;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			didYouWin();
		});

		$("#crystalFour").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 4;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+4;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			didYouWin();
		});

		$("#crystalOne").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 3;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+3;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			didYouWin();
		});
	}	
	
	const gameThree = () => {
		$("#crystalThree").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 8;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+8;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>"); 
		    didYouWin();
		});

		$("#crystalFour").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 6;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+6;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			didYouWin();
		});

		$("#crystalOne").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 4;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+4;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			didYouWin();
		});

		$("#crystalTwo").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 3;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+3;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			didYouWin();
		});
	} 
});