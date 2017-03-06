$(document).ready(function() {

	var randomNum = 0;
	var wins = 0;
	var losses = 0;
	var playerNum =0;

	function randomStartingNum(result) {
	    randomNum = Math.floor(Math.random() * 102)+19;
	    $("#randomNumber").html("<h2>"+randomNum+"</h2>");
	    playerNum = 0;
	}

	randomStartingNum();

	function didYouWin() {
	if (playerNum === randomNum) {
		    wins++;
		    $("#winsLosses").html("<h2 id='text'>Wins:"+ wins +"<br>Losses:"+ losses +"</h2>");       
			playerNum = 0;
			$("#playerNumber").html("<h2>" + playerNum +"</h2>");
			randomStartingNum();
		} else if (playerNum > randomNum) {
		    losses++;
		    $("#winsLosses").html("<h2 id='text'>Wins:"+ wins +"<br>Losses:"+ losses +"</h2>");
		    playerNum = 0;
		    $("#playerNumber").html("<h2>" + playerNum +"</h2>");
		    randomStartingNum();
		}
	}

	$("#crystalOne").on("click", function() {
	    if (playerNum === 0) {
	    playerNum = 12;
	    $("#playerNumber").html("<h2>" + playerNum +"</h2>");
		} else 
		playerNum = playerNum+12;
	    $("#playerNumber").html("<h2>" + playerNum +"</h2>"); 
	    didYouWin();
	});

	$("#crystalTwo").on("click", function() {
	    if (playerNum === 0) {
	    playerNum = 6;
	    $("#playerNumber").html("<h2>" + playerNum +"</h2>");
		} else 
		playerNum = playerNum+6;
	    $("#playerNumber").html("<h2>" + playerNum +"</h2>");
		didYouWin();
	});

	$("#crystalThree").on("click", function() {
	    if (playerNum === 0) {
	    playerNum = 10;
	    $("#playerNumber").html("<h2>" + playerNum +"</h2>");
		} else 
		playerNum = playerNum+10;
	    $("#playerNumber").html("<h2>" + playerNum +"</h2>");
		didYouWin();
	});

	$("#crystalFour").on("click", function() {
	    if (playerNum === 0) {
	    playerNum = 3;
	    $("#playerNumber").html("<h2>" + playerNum +"</h2>");
		} else 
		playerNum = playerNum+3;
	    $("#playerNumber").html("<h2>" + playerNum +"</h2>");
		didYouWin();
	});
});

