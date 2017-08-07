function search(){
	var x = document.getElementById('summoner').value;
	alert(x);
	window.location.href = "ingame.html";
}
function handle(e){
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that rusn
            search();
        }
    }
var champnum = 0;
function change(value, champnum){
	var champ =document.getElementsByClassName("champion")[champnum];
	champ.style = ("background: url(Champions/" + value + ".png)");
	
}
function showDropdown(num) {
	champnum = num;
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.champion')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}