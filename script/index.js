let btn_prev = document.querySelector("#prev");
let btn_next = document.querySelector("#next");

let myPhoto = document.querySelectorAll(".gallery .photo img");
let i =0;

btn_next.onclick = function() {
	myPhoto[i].slyle.display = "none";
	i++

}

btn_prev.onclick = function() {
	alert(1)
}