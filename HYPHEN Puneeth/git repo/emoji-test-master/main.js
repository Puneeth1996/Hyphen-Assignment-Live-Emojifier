/**
 * Note: Your code has to work only on the latest stable version of Chrome browser. Please avoid spending time fixing other browser quirks.
 * Also, please take care of the following conditions ...
 * 1. Replace :) and <3 with the respective images in img folder
 * 2. Once the text has been replaced with the image the text caret should be reset to the right of the image,
 *    so that the user can continue typing.
 *
 * If you have any questions please don't hesitate to ask.
 *
 * Good luck! :)
 */





(function(window, emojis) {
  var el = document.getElementById('user-input');
  
  // space for your code magic
  // Identified that on keyup helps in stramlinning the input text
  // For adding images once there any of the two types emojies present 
  // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_create


  el.addEventListener("keyup", myFunction );
function myFunction() {
	var x = el.innerText;
	console.log(x);
	if ( x === ":)"){
		console.log("TYPE I : EMOJI Is Here !!")
		var imgI = document.createElement("img-I");
		imgI.setAttribute("src", "img/smiling-face.png");
		imgI.setAttribute("width", "30");
		imgI.setAttribute("height", "30");
		imgI.setAttribute("alt", "The Smiling Face");
		document.body.appendChild(imgI);
	}
	if ( x === "<3"){
		console.log("TYPE II : EMOJI Is Here !!")
		var imgII = document.createElement("img-II");
		imgII.setAttribute("src", "img/smiling-face.png");
		imgII.setAttribute("width", "30");
		imgII.setAttribute("height", "30");
		imgII.setAttribute("alt", "The Smiling Face");
		document.body.appendChild(imgII);
	} 

}

})


(window, {
  ':)': 'img/smiling-face.png',
  '<3': 'img/heart-red.png'
});
