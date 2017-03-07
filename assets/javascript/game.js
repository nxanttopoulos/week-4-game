$(document).ready(function() {

	var randomNum = 0;
	var wins = 0;
	var losses = 0;
	var playerNum =0;
	var oneToThree =0;

	function randomStartingNum(result) {
	    randomNum = Math.floor(Math.random() * 102)+19;
	    $("#randomNumber").html("<h2 id='text2'>"+randomNum+"</h2>");
	    playerNum = 0;
	    randomGame();
	}

	function randomGame(result) {
	    oneToThree = Math.floor(Math.random() * 3)+1;
	    if (oneToThree === 1) {
	    	gameOne();
	    } else if (oneToThree === 2) {
	    	gameTwo();
	    } else {
	    	gameThree();
	    }
	}

	randomStartingNum();

	function didYouWin() {
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

	function GameOne () {
		$("#crystalOne").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 12;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+12;
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
		    playerNum = 10;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+10;
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

	function gameTwo () {
		$("#crystalTwo").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 12;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+12;
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
		    playerNum = 10;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+10;
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
	
	function gameThree () {
		$("#crystalThree").on("click", function() {
		    if (playerNum === 0) {
		    playerNum = 12;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+12;
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
		    playerNum = 10;
		    $("#playerNumber").html("<h2 id='text2'>" + playerNum +"</h2>");
			} else 
			playerNum = playerNum+10;
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