//Variables
//===============================================================================
//random number goal
var randomNumber;

var characterNumArr=[1,2,3,4];

var wins=0;
var losses=0;

var score=0;



//Functions
//===============================================================================


function newGame(){
	//variables
	//random number
	replay();
	randomNumber=Math.floor(Math.random()*(120-19)+9);
	$("#chosenNumber").html(randomNumber);
	characterGenerator()	
}

// checks duplicates of generated numbers
function duplicateNumberChecker(){
	var foundDuplicate=false;
	var tempArr = [0,0,0,0];//creates temp arra
	for(i=0;i<tempArr.length;i++){//runs through temp array, duplicates numbers
		tempArr[i]=characterNumArr[i];
	}
	tempArr.sort();//sorts from smallest to largest

	for(i=0;i<tempArr.length-1;i++){//runs through array again 
		if(tempArr[i]==tempArr[i+1]){//checks to see if any of the numbers are duplicated
			foundDuplicate=true;
		}
	}

	if(foundDuplicate==true){//if duplicate found
		characterGenerator();//creates new numbers
	} else {//or logs results.
		console.log("logging the final game numbers");
		for(i=0; i<characterNumArr.length; i++){
			console.log(characterNumArr[i]);
		}
	}
}

function randomNumberGenerator(){
	return Math.floor(Math.random()*(11)+1);
}//return gives the thing that called it something back

function characterGenerator(){
	for(i=0; i<characterNumArr.length; i++){
		characterNumArr[i]=randomNumberGenerator();
	}
	//need to attatch generated number to the images on the html
	duplicateNumberChecker();
}
//
function replay(){
	score = 0;
	$("#score").html(score);
}

function winOrLose(){
	if(score===randomNumber){
		didYouWin=true;
		wins++;
		$("#winLose").html("You Win!");
		$("#wins").html(wins);
		newGame();
		
	}
	else if(score>=randomNumber){
		didYouWin=false;
		losses++;
		$("#winLose").html("You Lose!");
		$("#losses").html(losses);
		newGame();
	}		
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
		//$(this).off("click");
		
	});
});


//**make into one function?
$("#natsu").on("click",function(){
	score=score + characterNumArr[0];
	$("#score").html(score);
	winOrLose();
});

$("#erza").on("click",function(){
	score=score + characterNumArr[1];
	$("#score").html(score);
	winOrLose();	
});

$("#lucy").on("click",function(){
	score=score + characterNumArr[2];
	$("#score").html(score);
	winOrLose();	
});

$("#gray").on("click",function(){
	score=score + characterNumArr[3];
	$("#score").html(score);
	winOrLose();
});

$("#restartButton").on("click", replay);



//get numbers to generate that don't repeat.










