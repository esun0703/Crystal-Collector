//Variables
//===============================================================================
//random number goal
var randomNumber;

var natsuNumber;
var erzaNumber;
var lucyNumber;
var grayNumber;

var wins=0;
var losses=0;

var score=0;


//Functions
//===============================================================================


function newGame(){
	//variables
	//random number
	randomNumber=Math.floor(Math.random()*(120-19)+9);

	$("#chosenNumber").append(randomNumber);

	//debugging
	console.log(randomNumber);
}

function characterGenerator(){
	//character numbers
	natsuNumber=Math.floor(Math.random()*(11)+1);
	erzaNumber=Math.floor(Math.random()*(11)+1);
	lucyNumber=Math.floor(Math.random()*(11)+1);
	grayNumber=Math.floor(Math.random()*(11)+1);

	//need to attatch generated number to the images on the html

	//debugging
	console.log(natsuNumber);
	console.log(erzaNumber);
	console.log(lucyNumber);
	console.log(grayNumber);
}

//adds character's points to total score and pushes to #score div



	


//Gameplay
//===============================================================================
$(".close").on("click", function(){
	$('.alert').remove();
});

$("#startButton").on("click", function(){
	$("#startButton").on("click", function(){
		newGame();
		characterGenerator();
		$(this).off("click");
		
	});
});

//need to make add a true/false statement****
function winOrLose(){
	if(score==randomNumber){
		didYouWin=true;
		wins++;
		$("#winLose").html("You Win!");
		$("#wins").html(wins);
	}
	else{
		didYouWin=false;
		losses++;
		$("#winLose").html("You Lose!");
		$("#losses").html(losses);

	}		
}

//every click adds attributed numbers to total score
	//push that new total score to #score;

//**make into one function?
	$("#natsu").on("click",function(){
		score=score + natsuNumber;
		$("#score").html(score);
		winOrLose();
	});

	$("#erza").on("click",function(){
		score=score + erzaNumber;
		$("#score").html(score);
		winOrLose();	
	});

	$("#lucy").on("click",function(){
		score=score + lucyNumber;
		$("#score").html(score);
		winOrLose();	
	});

	$("#gray").on("click",function(){
		score=score + grayNumber;
		$("#score").html(score);
		winOrLose();
	});



//});









