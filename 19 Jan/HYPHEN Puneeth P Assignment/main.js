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

// https://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity/3866442#3866442
function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    { 
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}


function smilingImg(){
	console.log("TYPE I : EMOJI Is Here !!")
	var imgI = document.createElement("img");
	imgI.setAttribute("src", "img/smiling-face.png");
	imgI.setAttribute("alt", "The Smiling Face");
	el.appendChild(imgI);
	setEndOfContenteditable(el);	
}

function heartImg(){	
	console.log("TYPE II : EMOJI Is Here !!")
	var imgII = document.createElement("img");
	imgII.setAttribute("src", "img/heart-red.png");
	imgII.setAttribute("alt", "The Heart Red");
	el.appendChild(imgII);
	setEndOfContenteditable(el);
}

	el.addEventListener("keyup", myFunction );
	function myFunction() {
		var x = el.innerText;
		console.log(x);
		// var emojiOne = /^\:\)/.test(x);
		// var emojiTwo = /^\<3/.test(x);
		if ( x.endsWith("\:\)") ){smilingImg(); }
		if ( x.endsWith("\<3") ){heartImg(); } 

	}

})


(window, {
  ':)': 'img/smiling-face.png',
  '<3': 'img/heart-red.png'
});
