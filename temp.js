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

var IdToChamp = new Array(); 
IdToChamp['266'] = "Aatrox";
IdToChamp['103'] = "Ahri";
IdToChamp['84'] = "Akali";
IdToChamp['12'] = "Alistar";
IdToChamp['32'] = "Amumu";
IdToChamp['34'] = "Anivia";
IdToChamp['1'] = "Annie";
IdToChamp['22'] = "Ashe";
IdToChamp['136'] = "AurelionSol";
IdToChamp['268'] = "Azir";
IdToChamp['432'] = "Bard";
IdToChamp['53'] = "Blitzcrank";
IdToChamp['63'] = "Brand";
IdToChamp['201'] = "Braum";
IdToChamp['51'] = "Caitlyn";
IdToChamp['164'] = "Camille";
IdToChamp['69'] = "Cassiopeia";
IdToChamp['31'] = "Chogath";
IdToChamp['42'] = "Corki";
IdToChamp['122'] = "Darius";
IdToChamp['131'] = "Diana";
IdToChamp['36'] = "DrMundo";
IdToChamp['119'] = "Draven";
IdToChamp['245'] = "Ekko";
IdToChamp['60'] = "Elise";
IdToChamp['28'] = "Evelynn";
IdToChamp['81'] = "Ezreal";
IdToChamp['9'] = "Fiddlesticks";
IdToChamp['114'] = "Fiora";
IdToChamp['105'] = "Fizz";
IdToChamp['3'] = "Galio";
IdToChamp['41'] = "Gangplank";
IdToChamp['86'] = "Garen";
IdToChamp['150'] = "Gnar";
IdToChamp['79'] = "Gragas";
IdToChamp['104'] = "Graves";
IdToChamp['120'] = "Hecarim";
IdToChamp['74'] = "Heimerdinger";
IdToChamp['420'] = "Illaoi";
IdToChamp['39'] = "Irelia";
IdToChamp['427'] = "Ivern";
IdToChamp['40'] = "Janna";
IdToChamp['59'] = "JarvanIV";
IdToChamp['24'] = "Jax";
IdToChamp['126'] = "Jayce";
IdToChamp['202'] = "Jhin";
IdToChamp['222'] = "Jinx";
IdToChamp['429'] = "Kalista";
IdToChamp['43'] = "Karma";
IdToChamp['30'] = "Karthus";
IdToChamp['38'] = "Kassadin";
IdToChamp['55'] = "Katarina";
IdToChamp['10'] = "Kayle";
IdToChamp['141'] = "Kayn";
IdToChamp['85'] = "Kennen";
IdToChamp['121'] = "Khazix";
IdToChamp['203'] = "Kindred";
IdToChamp['240'] = "Kled";
IdToChamp['96'] = "KogMaw";
IdToChamp['7'] = "Leblanc";
IdToChamp['64'] = "LeeSin";
IdToChamp['89'] = "Leona";
IdToChamp['127'] = "Lissandra";
IdToChamp['236'] = "Lucian";
IdToChamp['117'] = "Lulu";
IdToChamp['99'] = "Lux";
IdToChamp['54'] = "Malphite";
IdToChamp['90'] = "Malzahar";
IdToChamp['57'] = "Maokai";
IdToChamp['11'] = "MasterYi";
IdToChamp['21'] = "MissFortune";
IdToChamp['62'] = "MonkeyKing";
IdToChamp['82'] = "Mordekaiser";
IdToChamp['25'] = "Morgana";
IdToChamp['267'] = "Nami";
IdToChamp['75'] = "Nasus";
IdToChamp['111'] = "Nautilus";
IdToChamp['76'] = "Nidalee";
IdToChamp['56'] = "Nocturne";
IdToChamp['20'] = "Nunu";
IdToChamp['2'] = "Olaf";
IdToChamp['61'] = "Orianna";
IdToChamp['516'] = "Ornn";
IdToChamp['80'] = "Pantheon";
IdToChamp['78'] = "Poppy";
IdToChamp['133'] = "Quinn";
IdToChamp['497'] = "Rakan";
IdToChamp['33'] = "Rammus";
IdToChamp['421'] = "RekSai";
IdToChamp['58'] = "Renekton";
IdToChamp['107'] = "Rengar";
IdToChamp['92'] = "Riven";
IdToChamp['68'] = "Rumble";
IdToChamp['13'] = "Ryze";
IdToChamp['113'] = "Sejuani";
IdToChamp['35'] = "Shaco";
IdToChamp['98'] = "Shen";
IdToChamp['102'] = "Shyvana";
IdToChamp['27'] = "Singed";
IdToChamp['14'] = "Sion";
IdToChamp['15'] = "Sivir";
IdToChamp['72'] = "Skarner";
IdToChamp['37'] = "Sona";
IdToChamp['16'] = "Soraka";
IdToChamp['50'] = "Swain";
IdToChamp['134'] = "Syndra";
IdToChamp['223'] = "TahmKench";
IdToChamp['163'] = "Taliyaah";
IdToChamp['91'] = "Talon";
IdToChamp['44'] = "Taric";
IdToChamp['17'] = "Teemo";
IdToChamp['412'] = "Thresh";
IdToChamp['18'] = "Tristana";
IdToChamp['48'] = "Trundle";
IdToChamp['23'] = "Tryndamere";
IdToChamp['57'] = "TwistedFate";
IdToChamp['29'] = "Twitch";
IdToChamp['77'] = "Udyr";
IdToChamp['6'] = "Urgot";
IdToChamp['110'] = "Varus";
IdToChamp['67'] = "Vayne";
IdToChamp['45'] = "Veigar";
IdToChamp['161'] = "Velkoz";
IdToChamp['254'] = "Vi";
IdToChamp['112'] = "Viktor";
IdToChamp['8'] = "Vladimir";
IdToChamp['106'] = "Volibear";
IdToChamp['19'] = "Warwick";
IdToChamp['498'] = "Xayah";
IdToChamp['101'] = "Xerath";
IdToChamp['5'] = "XinZhao";
IdToChamp['157'] = "Yasuo";
IdToChamp['83'] = "Yorick";
IdToChamp['154'] = "Zac";
IdToChamp['238'] = "Zed";
IdToChamp['115'] = "Ziggs";
IdToChamp['26'] = "Zilean";
IdToChamp['142'] = "Zyra";

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

var champions = new Array();

function search(){

  var x = document.getElementById('summoner').value;
  var y = document.getElementById('regionselect').value;
    $.ajax({
      url:'http://127.0.0.1:5000/info',
      data: {name: x, region: y},
      dataType: "json",
      success: function(data){
        $("#firstmain").hide();
  $("#main").css("visibility", 'visible');
        champions[0] = data[0];
        champions[1] = data[1];
        champions[2] = data[2];
        champions[3] = data[3];
        champions[4] = data[4];
        insertChamps();
        
      },
      error: function(textStatus, errorThrow){
 
    alert("Summoner not found");
    window.location.reload();
      }

   });
}
function insertChamps(){
  alert(sumSwitch['spell-Exhaust']);IdToChamp['266']
  $("#champ1").css("background-image", "url(Champions/" + IdToChamp[champions[0][0]] + ".png)");
  $("#champ2").css("background-image", "url(Champions/" + IdToChamp[champions[1][0]] + ".png)");
  $("#champ3").css("background-image", "url(Champions/" + IdToChamp[champions[2][0]] + ".png)");
  $("#champ4").css("background-image", "url(Champions/" + IdToChamp[champions[3][0]] + ".png)");
  $("#champ5").css("background-image", "url(Champions/" + IdToChamp[champions[4][0]] + ".png)");
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
function changeBoots(boots){
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
function changeInsight(insight){
  if (insightToggle[InsightToChamp[insight]] == false){
    insightToggle[InsightToChamp[insight]] = true;
    $("#" + insight).css("background-image", "url(Other/Insight2.png)");
    multiplier[InsightToChamp[insight]] -= 0.15;
  }
  else{
  insightToggle[InsightToChamp[insight]] = false;
    $("#" + insight).css("background-image", "url(Other/Insight.png)");
    multiplier[InsightToChamp[insight]] += 0.15;
}
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
  spellcooldown = Math.round(summs[tempcooldown[1]] * multiplier[IdToChamp[tempspellid]]);
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
$( ".boots" ).click(function() {
  changeBoots(this.id); 
});
$( ".insight" ).click(function() {
  changeInsight(this.id); 
});