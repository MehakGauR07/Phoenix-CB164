function submitform(form) {
    event.preventDefault();
	var redalert = document.querySelector(".redalert");
	var username = document.forms["form"]["username"].value;
	var password = document.forms["form"]["password"].value;
	usernamearr = ["akankshrakesh@gmail.com","youaregay@gmail.com","hahawtf@hotmail.com","whyamievendoingthisidkidk@outlook.com"]
	passwordarr = ["ARbrrrr","yesyouare","iaintlaughingbitch","imcrazy1234"]
	var counter = 0;
	for (let i = 0; i<usernamearr.length ; i++){
		if(username = usernamearr[i] && password == passwordarr[i]){
			counter++
		}
	}
	if (counter!=0){
		window.open('https://akankshrakesh.github.io/Paw-care/', '_self');
	}
	else{
		redalert.style.display = 'block';
	}
}
function x(){
	
}
function y(){
	var redalert = document.querySelector(".redalert");
	redalert.style.display="none";
}
var wow = document.querySelector("#username");
wow.addEventListener(onselect,y());