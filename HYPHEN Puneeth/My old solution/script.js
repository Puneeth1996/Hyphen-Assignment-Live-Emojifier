function myFunction() {
  var sourceString = document.getElementById("myInput").value;
  // Below We need to filter the emojies such :) :> ... etc
  // Int he Replace function I have used the Reagex to fing replace :) 
	var replacedSourceString = sourceString.replace(/\:\)|\:D|\:\>/gi,
													 function (x) {
													 	if(x == ":)" && x == ":D" && x == ":>"){ 
													 	  console.log("you have an emmoji here &#128512;");
												 		  x = document.createElement("IMG");
														  x.setAttribute("src", "img_smile.jpg");
														  x.setAttribute("width", "30");
														  x.setAttribute("height", "20");
														  x.setAttribute("alt", "The Pulpit Rock");
														  document.body.appendChild(x);
													 	}
													 });

  	console.log("You wrote: " + replacedSourceString);
 
  document.getElementById("demo").innerHTML = "You wrote: " + replacedSourceString;
}