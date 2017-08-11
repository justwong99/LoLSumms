var tempid = "";
var tempspellid = "";
var summs = new Array();
summs['spell-Barrier'] = 180;
summs['spell-Clarity'] = 240;
summs['spell-Cleanse'] = 210;
summs['spell-Exhaust'] = 210;
summs['spell-Flash'] = 300;
summs['spell-Ghost'] = 180;
summs['spell-Heal'] = 240;
summs['spell-Ignite'] = 210;
summs['spell-Mark'] = 80;
summs['spell-Smite'] = 75;
summs['spell-Teleport'] = 300;

var sumSwitch = new Array();
sumSwitch['spell-Barrier'] = "Barrier";
sumSwitch['spell-Clarity'] = "Clarity";
sumSwitch['spell-Cleanse'] = "Cleanse";
sumSwitch['spell-Exhaust'] = "Exhaust";
sumSwitch['spell-Flash'] = "Flash";
sumSwitch['spell-Ghost'] = "Ghost";
sumSwitch['spell-Heal'] = "Heal";
sumSwitch['spell-Ignite'] = "Ignite";
sumSwitch['spell-Mark'] = "Mark";
sumSwitch['spell-Smite'] = "Smite";
sumSwitch['spell-Teleport'] = "Teleport";

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

function change(champ){	
	$("#" + tempid).css("background-image", "url(Champions/" + champ + ".png)");
	
}
function changeSpell(spell){ 
  $("#" + tempspellid).css("background-image", "url(Spells/" + spell + ".png)");
  
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
var spellcooldown;
  var timer;
function getCooldown(){
  var tempcooldown = $("#" + tempspellid).prop("classList");
  spellcooldown = summs[tempcooldown[1]];
}
function startCount(){
  if(!timer){
    var tempImg = $("#" + tempspellid).prop("classList");
    $("#" + tempspellid).css("background-image", "url(Spells/" + sumSwitch[tempImg[1]] +"2.png)");
   document.getElementById(tempspellid).innerHTML = spellcooldown;
  timer = setInterval("countdown()", 1000);
}
else{
  var tempImg = $("#" + tempspellid).prop("classList");
    $("#" + tempspellid).css("background-image", "url(Spells/" + sumSwitch[tempImg[1]] +".png)");
  clearInterval(timer);
    timer = false;

  document.getElementById(tempspellid).style.opacity = "1";
  document.getElementById(tempspellid).innerHTML = "";
}
}
function countdown(){
   spellcooldown--;
   document.getElementById(tempspellid).innerHTML = spellcooldown;
   if (spellcooldown == 0){
    clearInterval(timer);
    timer = false;
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

function removeSpell(tempspellid){
  $("#" + tempspellid).removeClass (function (index, className) {
    return (className.match (/(^|\s)spell-\S+/g) || []).join(' ');
});
}

$( ".champion" ).click(function() {
  tempid = (this.id);
  showDropdown();
});
$( ".spell" ).click(function() {
  tempspellid = (this.id);
  if (spellToggle == true){
  showSpellDropdown();
}
 else{
  getCooldown();
  startCount();
 }
});

$( ".spell-choice" ).click(function() {
  changeSpell(this.id);
  var secondClass = "spell-" + (this.id);
  removeSpell(tempspellid);
  $("#" + tempspellid).addClass(secondClass);
});