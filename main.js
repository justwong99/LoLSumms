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

var IdToNum = new Array();
IdToNum['spell1'] = 0;
IdToNum['spell2'] = 1;
IdToNum['spell3'] = 2;
IdToNum['spell4'] = 3;
IdToNum['spell5'] = 4;
IdToNum['spell6'] = 5;
IdToNum['spell7'] = 6;
IdToNum['spell8'] = 7;
IdToNum['spell9'] = 8;
IdToNum['spell10'] = 9;


var timers = new Array(10);

var running = new Array(10);
running[0] = false;
running[1] = false;
running[2] = false;
running[3] = false;
running[4] = false;
running[5] = false;
running[6] = false;
running[7] = false;
running[8] = false;
running[9] = false;
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
  var secondClass = "spell-" + (spell);
  removeSpell(tempspellid);
  $("#" + tempspellid).addClass(secondClass);
  clearInterval(timers[IdToNum[tempspellid]]);
  document.getElementById(tempspellid).innerHTML = "";
  running[IdToNum[tempspellid]] = false;
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
var spellcooldown = new Array(10);
  var value = 5;
function getCooldown(){
  var tempcooldown = $("#" + tempspellid).prop("classList");
  spellcooldown = summs[tempcooldown[1]];
}
function startCount(spellid, seconds){
  var tempImg = $("#" + spellid).prop("classList");
    $("#" + spellid).css("background-image", "url(Spells/" + sumSwitch[tempImg[1]] +"2.png)");
  var buttonNum = document.getElementById(spellid);
  buttonNum.innerHTML = seconds;
  var interval = setInterval(function(){
    if (seconds > 1){
    seconds--;
    buttonNum.innerHTML = seconds;
    }
    else if (seconds == 1){
      running[IdToNum[tempspellid]] = false;
  clearInterval(timers[IdToNum[spellid]]);
  var tempImg = $("#" + tempspellid).prop("classList");
  $("#" + tempspellid).css("background-image", "url(Spells/" + sumSwitch[tempImg[1]] +".png)");
  document.getElementById(tempspellid).innerHTML = "";
    }
  },1000);
   timers[IdToNum[spellid]] = interval;

}

function stopCount(spellid){
  clearInterval(timers[IdToNum[tempspellid]]);
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
  if (running[IdToNum[tempspellid]] == false){
    running[IdToNum[tempspellid]] = true;
  getCooldown();
  startCount(tempspellid, spellcooldown);
 }

else{
  running[IdToNum[tempspellid]] = false;
  clearInterval(timers[IdToNum[tempspellid]]);
  var tempImg = $("#" + tempspellid).prop("classList");
  $("#" + tempspellid).css("background-image", "url(Spells/" + sumSwitch[tempImg[1]] +".png)");
  document.getElementById(tempspellid).innerHTML = "";
}
}
});

$( ".spell-choice" ).click(function() {
  changeSpell(this.id);
  
});