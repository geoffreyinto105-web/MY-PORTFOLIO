window.onload = function(){
alert("Welcome to my portfolio!");

var dateEl = document.getElementById("date");
if(dateEl){
var now = new Date();
dateEl.innerHTML = "Today is " + now.toLocaleDateString();
}

var themeBtn = document.getElementById("themeBtn");
if(themeBtn){
themeBtn.onclick = function(){
document.body.classList.toggle("dark");
if(document.body.classList.contains("dark")){
themeBtn.innerHTML = "Light Mode";
}else{
themeBtn.innerHTML = "Dark Mode";
}
};
}

var moreBtn = document.getElementById("moreBtn");
var moreText = document.getElementById("moreText");
if(moreBtn && moreText){
moreBtn.onclick = function(){
if(moreText.classList.contains("hidden")){
moreText.classList.remove("hidden");
moreBtn.innerHTML = "Show Less";
}else{
moreText.classList.add("hidden");
moreBtn.innerHTML = "Read More";
}
};
}
};

function showAlert(){
alert("Thank you! Your message has been received.");
}