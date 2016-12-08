//Variables
//===============================================================================
//random number goal
var randomNumber;

var natsuNumber;
var erzaNumber;
var lucyNumber;
var grayNumber;

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

//**need to fix.
$("#natsu").on("click",function(){
	score=score + natsuNumber;
	$("#score").append(score);

	//debugging
});

$("#erza").on("click",function(){
	score=score + erzaNumber;
	$("#score").append(score);

});

$("#lucy").on("click",function(){
	score=score + lucyNumber;
	$("#score").append(score);

});

$("#gray").on("click",function(){
	score=score + grayNumber;
	$("#score").append(score);
});

//every click adds attributed numbers to total score
	//push that new total score to #score;

 //if points equal to number generated in the beginning, then win
 	//push You win to #winOrLose
 	//push one point to win if win
 //else 
 	//push You Lose to #winOrLose
 	//push one point to lose
 	//







