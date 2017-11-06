function myfunction() {
		document.getElementById("h1").innerHTML = "Why would you press the button?!";
		document.getElementById("h1").style.fontSize = "2em";
		document.getElementById("butt").style.display = 'none';
	}

function changeColor() {
    var header = document.getElementById("header");
    
    if(header.style == "white")
    {
      header.style = "red";
    }
    else
      header.style = "white";
}

function change() {
	  var image = document.getElementById('myimage');
	  var h1 = document.getElementById('h1');
	    
	  if (image.src.match("facepalm"))  {
	    h1.innerHTML="Click me.";
	    image.src = "wtf.jpg";
	  }
	  else if (image.src.match("wtf")){
	    image.src = "canyounot.png";
	  }
	  else {
	    h1.innerHTML="Seriously...";
	    image.src = "facepalm.png";
	  }
}

function touchy() {
  alert("Don't touch my foot yo!");
}