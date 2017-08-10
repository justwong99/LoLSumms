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
var tempid = "";
function change(champ){	
	$("#" + tempid).css("background-image", "url(Champions/" + champ + ".png)");
	
}
function changeSpell(spell){ 
  $("#" + tempid).css("background-image", "url(Spells/" + spell + ".png)");
  
}
function showDropdown(){
hideBar();
  $("#myDropdown").toggleClass("show");
}
function showSpellDropdown(){
hideBar();

   $("#mySpellDropdown").toggleClass("show");
}
function test(){
  alert("xd");
}
function hideBar(){
   var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
}




var spellToggle = false;

function toggleSpell(){

  if (spellToggle == false){

      spellToggle = true;
      $("#checkbox").css("background-image", "url(Other/checkmark.png)");
  }
  else{
    spellToggle = false;
    $("#checkbox").css("background-image", "none");
  }
}
window.onclick = function(event) {
  if (!event.target.matches('button') ) {

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

function checkspell(){
if (spellToggle == true){
  showSpellDropdown();
}


}
