function myFunction() {
  var sourceString = document.getElementById("myInput").value;
  // Below We need to filter the emojies such :) :> ... etc
  // Int he Replace function I have used the Reagex to fing replace :) 
  // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_replace2

  // 
	var replacedSourceString = sourceString.replace(/\:\)|\:\>/gi,
													 function (x) {													 	
													 	  console.log("Emoji  Alert !!! " + x);  
													 	  if(x === ':)'){
													 	  	console.log("you have an emmoji here 😃");
													 	 	return '😃'; 
													 	 	}
													 	 else{
													 	  	console.log("you have an emmoji here ❤️");
													 	 	return '❤️';
													 	 	}
													 	 exit;
													 });


	var newString = replacedSourceString;

	// var replacedSourceString = sourceString.replace(/\:\)/gi, "😃");
	// replacedSourceString.replace(/\:\>/gi, "❤️");
 //  	console.log("You wrote: " + replacedSourceString);
// Below Are the Emoji link which have been referenced 
// https://www.kirupa.com/html5/emoji.htm  & https://emojipedia.org/smiling-face-with-open-mouth/
  document.getElementById("demo").innerHTML = "You wrote: " + newString;
}