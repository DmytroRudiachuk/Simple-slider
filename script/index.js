let btn_prev = document.querySelector("#prev");
let btn_next = document.querySelector("#next");

let myPhoto = document.querySelectorAll("#gallery .photo img");
let i = 0;

btn_next.onclick = function() {
	myPhoto[i].className = "";
	i++;

	if(i >= myPhoto.length){
		i = 0;
	}

	myPhoto[i].className = "showed";
	
}

btn_prev.onclick = function() {
	myPhoto[i].className = "";
	i--;
	if(i < 0){
		i = myPhoto.length - 1;
	}

	myPhoto[i].className = "showed";

}