// variables
var tempid = "";
var tempspellid = "";
var timers = new Array(10);
var champions = new Array();
var spellcooldown = new Array(10);
var spellToggle = false;

// dictionaries and arrays
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

var BootsToChamp = new Array();
BootsToChamp['boots1'] = 0;
BootsToChamp['boots2'] = 1;
BootsToChamp['boots3'] = 2;
BootsToChamp['boots4'] = 3;
BootsToChamp['boots5'] = 4;

var InsightToChamp = new Array();
InsightToChamp['insight1'] = 0;
InsightToChamp['insight2'] = 1;
InsightToChamp['insight3'] = 2;
InsightToChamp['insight4'] = 3;
InsightToChamp['insight5'] = 4;

var ChampId = new Array(); 
ChampId['266'] = "Aatrox"; ChampId['103'] = "Ahri"; ChampId['84'] = "Akali"; ChampId['12'] = "Alistar"; ChampId['32'] = "Amumu"; ChampId['34'] = "Anivia"; ChampId['1'] = "Annie";
ChampId['22'] = "Ashe"; ChampId['136'] = "AurelionSol"; ChampId['268'] = "Azir"; ChampId['432'] = "Bard"; ChampId['53'] = "Blitzcrank"; ChampId['63'] = "Brand"; ChampId['201'] = "Braum"; ChampId['51'] = "Caitlyn";
ChampId['164'] = "Camille"; ChampId['69'] = "Cassiopeia"; ChampId['31'] = "Chogath"; ChampId['42'] = "Corki"; ChampId['122'] = "Darius"; ChampId['131'] = "Diana"; ChampId['36'] = "DrMundo"; ChampId['119'] = "Draven";
ChampId['245'] = "Ekko"; ChampId['60'] = "Elise"; ChampId['28'] = "Evelynn"; ChampId['81'] = "Ezreal"; ChampId['9'] = "Fiddlesticks"; ChampId['114'] = "Fiora"; ChampId['105'] = "Fizz"; ChampId['3'] = "Galio";
ChampId['41'] = "Gangplank"; ChampId['86'] = "Garen"; ChampId['150'] = "Gnar"; ChampId['79'] = "Gragas"; ChampId['104'] = "Graves"; ChampId['120'] = "Hecarim"; ChampId['74'] = "Heimerdinger"; ChampId['420'] = "Illaoi";
ChampId['39'] = "Irelia"; ChampId['427'] = "Ivern"; ChampId['40'] = "Janna"; ChampId['59'] = "JarvanIV"; ChampId['24'] = "Jax"; ChampId['126'] = "Jayce"; ChampId['202'] = "Jhin"; ChampId['222'] = "Jinx";
ChampId['429'] = "Kalista"; ChampId['43'] = "Karma"; ChampId['38'] = "Kassadin"; ChampId['55'] = "Katarina"; ChampId['10'] = "Kayle"; ChampId['141'] = "Kayn"; ChampId['85'] = "Kennen"; ChampId['121'] = "Khazix";
ChampId['203'] = "Kindred"; ChampId['240'] = "Kled"; ChampId['96'] = "KogMaw"; ChampId['7'] = "Leblanc"; ChampId['64'] = "LeeSin"; ChampId['89'] = "Leona"; ChampId['127'] = "Lissandra"; ChampId['236'] = "Lucian";
ChampId['117'] = "Lulu"; ChampId['99'] = "Lux"; ChampId['54'] = "Malphite"; ChampId['90'] = "Malzahar"; ChampId['57'] = "Maokai"; ChampId['11'] = "MasterYi"; ChampId['21'] = "MissFortune"; ChampId['62'] = "MonkeyKing";
ChampId['82'] = "Mordekaiser"; ChampId['25'] = "Morgana"; ChampId['267'] = "Nami"; ChampId['75'] = "Nasus"; ChampId['111'] = "Nautilus"; ChampId['76'] = "Nidalee"; ChampId['56'] = "Nocturne"; ChampId['20'] = "Nunu";
ChampId['2'] = "Olaf"; ChampId['61'] = "Orianna"; ChampId['516'] = "Ornn"; ChampId['80'] = "Pantheon"; ChampId['78'] = "Poppy"; ChampId['133'] = "Quinn"; ChampId['497'] = "Rakan"; ChampId['33'] = "Rammus";
ChampId['421'] = "RekSai"; ChampId['58'] = "Renekton"; ChampId['107'] = "Rengar"; ChampId['92'] = "Riven"; ChampId['68'] = "Rumble"; ChampId['13'] = "Ryze"; ChampId['113'] = "Sejuani"; ChampId['35'] = "Shaco";
ChampId['98'] = "Shen"; ChampId['102'] = "Shyvana"; ChampId['27'] = "Singed"; ChampId['14'] = "Sion"; ChampId['15'] = "Sivir"; ChampId['72'] = "Skarner"; ChampId['37'] = "Sona"; ChampId['16'] = "Soraka";
ChampId['50'] = "Swain"; ChampId['134'] = "Syndra"; ChampId['223'] = "TahmKench"; ChampId['163'] = "Taliyah"; ChampId['91'] = "Talon"; ChampId['44'] = "Taric"; ChampId['17'] = "Teemo"; ChampId['412'] = "Thresh"; ChampId['18'] = "Tristana";
ChampId['48'] = "Trundle"; ChampId['23'] = "Tryndamere"; ChampId['57'] = "TwistedFate"; ChampId['29'] = "Twitch"; ChampId['77'] = "Udyr"; ChampId['6'] = "Urgot"; ChampId['110'] = "Varus"; ChampId['67'] = "Vayne";
ChampId['45'] = "Veigar"; ChampId['161'] = "Velkoz"; ChampId['112'] = "Viktor"; ChampId['8'] = "Vladimir"; ChampId['106'] = "Volibear"; ChampId['19'] = "Warwick"; ChampId['498'] = "Xayah"; ChampId['101'] = "Xerath";
ChampId['5'] = "XinZhao"; ChampId['157'] = "Yasuo"; ChampId['83'] = "Yorick"; ChampId['154'] = "Zac"; ChampId['238'] = "Zed"; ChampId['115'] = "Ziggs"; ChampId['26'] = "Zilean"; ChampId['143'] = "Zyra";


var IdToSpell = new Array();
IdToSpell['21'] = "Barrier";
IdToSpell['13'] = "Clarity";
IdToSpell['1'] = "Cleanse";
IdToSpell['3'] = "Exhaust";
IdToSpell['4'] = "Flash";
IdToSpell['6'] = "Ghost";
IdToSpell['7'] = "Heal";
IdToSpell['14'] = "Ignite";
IdToSpell['32'] = "Mark";
IdToSpell['11'] = "Smite";
IdToSpell['12'] = "Teleport";


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

var multiplier = new Array();
multiplier[0] = 1;
multiplier[1] = 1;
multiplier[2] = 1;
multiplier[3] = 1;
multiplier[4] = 1;

var IdToChamp = new Array();
IdToChamp['spell1'] = 0; 
IdToChamp['spell2'] = 0; 
IdToChamp['spell3'] = 1; 
IdToChamp['spell4'] = 1; 
IdToChamp['spell5'] = 2; 
IdToChamp['spell6'] = 2; 
IdToChamp['spell7'] = 3; 
IdToChamp['spell8'] = 3; 
IdToChamp['spell9'] = 4; 
IdToChamp['spell10'] = 4; 

var bootsToggle = new Array();
bootsToggle[0] = false;
bootsToggle[1] = false;
bootsToggle[2] = false;
bootsToggle[3] = false;
bootsToggle[4] = false;

var insightToggle = new Array();
insightToggle[0] = false;
insightToggle[1] = false;
insightToggle[2] = false;
insightToggle[3] = false;
insightToggle[4] = false;

var checkInsight = new Array();
checkInsight[0] = 0;
checkInsight[1] = 0;
checkInsight[2] = 0;
checkInsight[3] = 0;
checkInsight[4] = 0;



function search(){
// call the server
  var x = document.getElementById('summoner').value;
  var y = document.getElementById('regionselect').value;
    $.ajax({
      url:'http://lolsumms-server-lolsumms-server.193b.starter-ca-central-1.openshiftapps.com/info',
      data: {name: x, region: y}, // pass in summoner name and region for api call
      dataType: "json",
      crossDomain: true,
      success: function(data){
        $("#firstmain").hide();
  $("#main").css("visibility", 'visible');
        champions[0] = data[0]; // pass in necessary info to champion array
        champions[1] = data[1];
        champions[2] = data[2];
        champions[3] = data[3];
        champions[4] = data[4];
        insertChamps(); // set data
        insertInsight();
        insertSpells();
      },
      error: function(textStatus, errorThrow){
 
    alert("Summoner not found"); // on failiure
    window.location.reload();
      }

   });
}
// set values on search (online only)
function insertChamps(){

  $("#champ1").css("background-image", "url(Champions/" + ChampId[champions[0][0]] + ".png)");
  $("#champ2").css("background-image", "url(Champions/" + ChampId[champions[1][0]] + ".png)");
  $("#champ3").css("background-image", "url(Champions/" + ChampId[champions[2][0]] + ".png)");
  $("#champ4").css("background-image", "url(Champions/" + ChampId[champions[3][0]] + ".png)");
  $("#champ5").css("background-image", "url(Champions/" + ChampId[champions[4][0]] + ".png)");
}
function insertSpells(){
  $("#spell1").css("background-image", "url(Spells/" + IdToSpell[champions[0][1]] + ".png");
  $("#spell2").css("background-image", "url(Spells/" + IdToSpell[champions[0][2]] + ".png");
  $("#spell3").css("background-image", "url(Spells/" + IdToSpell[champions[1][1]] + ".png");
  $("#spell4").css("background-image", "url(Spells/" + IdToSpell[champions[1][2]] + ".png");
  $("#spell5").css("background-image", "url(Spells/" + IdToSpell[champions[2][1]] + ".png");
  $("#spell6").css("background-image", "url(Spells/" + IdToSpell[champions[2][2]] + ".png");
  $("#spell7").css("background-image", "url(Spells/" + IdToSpell[champions[3][1]] + ".png");
  $("#spell8").css("background-image", "url(Spells/" + IdToSpell[champions[3][2]] + ".png");
  $("#spell9").css("background-image", "url(Spells/" + IdToSpell[champions[4][1]] + ".png");
  $("#spell10").css("background-image", "url(Spells/" + IdToSpell[champions[4][2]] + ".png");
  $("#spell1").addClass("spell-" + IdToSpell[champions[0][1]]);
  $("#spell2").addClass("spell-" + IdToSpell[champions[0][2]]);
  $("#spell3").addClass("spell-" + IdToSpell[champions[1][1]]);
  $("#spell4").addClass("spell-" + IdToSpell[champions[1][2]]);
  $("#spell5").addClass("spell-" + IdToSpell[champions[2][1]]);
  $("#spell6").addClass("spell-" + IdToSpell[champions[2][2]]);
  $("#spell7").addClass("spell-" + IdToSpell[champions[3][1]]);
  $("#spell8").addClass("spell-" + IdToSpell[champions[3][2]]);
  $("#spell9").addClass("spell-" + IdToSpell[champions[4][1]]);
  $("#spell10").addClass("spell-" + IdToSpell[champions[4][2]]);



}
function insertInsight(){

  for (i = 0; i < 5; i++){
    if (champions[i][3] == 1){
      checkInsight[i] = 2;
      multiplier[i] -= 0.15;
    }
    else{
      checkInsight[i] = 1;
    }
  }
  $('#insight1').css("background-image", "url(Other/Insight" + checkInsight[0] + ".png)");
  $('#insight2').css("background-image", "url(Other/Insight" + checkInsight[1] + ".png)");
  $('#insight3').css("background-image", "url(Other/Insight" + checkInsight[2] + ".png)");
  $('#insight4').css("background-image", "url(Other/Insight" + checkInsight[3] + ".png)");
  $('#insight5').css("background-image", "url(Other/Insight" + checkInsight[4] + ".png)");
  $('#insight1').attr("disabled", true);
  $('#insight2').attr("disabled", true);
  $('#insight3').attr("disabled", true);
  $('#insight4').attr("disabled", true);
  $('#insight5').attr("disabled", true);

}


function change(champ){ // chaange champ icon (custom)
  $("#" + tempid).css("background-image", "url(Champions/" + champ + ".png)");
  
}
function changeSpell(spell){ // insert spell when being changed(custom)
  $("#" + tempspellid).css("background-image", "url(Spells/" + spell + ".png)");
  var secondClass = "spell-" + (spell);
  removeSpell(tempspellid);
  $("#" + tempspellid).addClass(secondClass);
  clearInterval(timers[IdToNum[tempspellid]]);
  document.getElementById(tempspellid).innerHTML = "";
  running[IdToNum[tempspellid]] = false;
}
function removeSpell(tempspellid){ // remove a spell when it is being changed (custom)
  $("#" + tempspellid).removeClass (function (index, className) {
    return (className.match (/(^|\s)spell-\S+/g) || []).join(' ');
});
}
function changeBoots(boots){ // change boots
  if (bootsToggle[BootsToChamp[boots]] == false){
    bootsToggle[BootsToChamp[boots]] = true;
    $("#" + boots).css("background-image", "url(Other/Boots2.png)");
    multiplier[BootsToChamp[boots]] -= 0.1;
  }
  else{
  bootsToggle[BootsToChamp[boots]] = false;
    $("#" + boots).css("background-image", "url(Other/Boots.png)");
    multiplier[BootsToChamp[boots]] += 0.1;
}
}
function changeInsight(insight){ // change mastery (custom)
  if (insightToggle[InsightToChamp[insight]] == false){
    insightToggle[InsightToChamp[insight]] = true;
    $("#" + insight).css("background-image", "url(Other/Insight2.png)");
    multiplier[InsightToChamp[insight]] -= 0.15;
  }
  else{
  insightToggle[InsightToChamp[insight]] = false;
    $("#" + insight).css("background-image", "url(Other/Insight1.png)");
    multiplier[InsightToChamp[insight]] += 0.15;
}
}

// selection dropdowns (custom only)
function showDropdown(){
hideBar();
  $("#myDropdown").toggleClass("show");
}
function showSpellDropdown(){
hideBar();

   $("#mySpellDropdown").toggleClass("show");
}

// function ensures only one dropdown can be open at any time
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

// Timers
function getCooldown(){ // get cooldown of timers
  var tempcooldown = $("#" + tempspellid).prop("classList");
  spellcooldown = Math.round(summs[tempcooldown[1]] * multiplier[IdToChamp[tempspellid]]);
}

function startCount(spellid, seconds){ // start counter of spell using objects
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

// stops a timer
function stopCount(spellid){
  clearInterval(timers[IdToNum[tempspellid]]);
}



// allow spells to change (custom)

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



// Event listens for buttons
 
window.onclick = function(event) { // show dropdown
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

function handle(e){
        if(e.keyCode === 13){
            e.preventDefault(); // when enter is presssed, run search()
            search();
        }
    }

$( ".champion" ).click(function() {
  tempid = (this.id);
  showDropdown(); // change champ (custom only)
});
$( ".spell" ).click(function() { // change spell, or start/stop timer for spell
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

$( ".spell-choice" ).click(function() { // spell dropdown
  changeSpell(this.id);
  
});
$( ".boots" ).click(function() { // toggle boots
  changeBoots(this.id); 
});
$( ".insight" ).click(function() { // toggle mastery (custom only)
  changeInsight(this.id); 
});