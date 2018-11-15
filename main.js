let container = document.querySelector('.container');
let infoDiv = document.querySelector('.info');

function Soldier() {
  this.demage = Math.floor(Math.random()*(1000-500)+500);
  this.weapon = ['Gun','Riffle','Knife','Sniper'][Math.floor(Math.random()*4)];
  this.health = Math.floor(Math.random()*(1000-100)+100);
}
let allSoldiers = [];

makeSoldiers(2000);
displaySoldiers();

let soldiersDivs = document.querySelectorAll('.box');

for (var i = 0; i < soldiersDivs.length; i++) {
  soldiersDivs[i].addEventListener('mouseenter',displaInfoDiv);
}

function displaInfoDiv(e) {
  infoDiv.style.top = (e.pageY - 90)+"px";
  infoDiv.style.left = (e.pageX + 10)+"px";
  infoDiv.style.display = "block";
  let id = this.id;
  let currentSoldier = allSoldiers[id];
  let text = '';
  for (var prop in currentSoldier) {
    text += '<p>'+prop+' '+currentSoldier[prop]+'</p>';
  }
  infoDiv.innerHTML = text;
}

function makeSoldiers(howMany) {
  for (var i = 0; i < howMany; i++) {
    allSoldiers.push(new Soldier())
  }
}
function displaySoldiers() {
  let text = '';

  for (var i = 0; i < allSoldiers.length; i++) {

    if (allSoldiers[i].weapon == "Sniper") {
          text += '<div id="'+i+'" class="box sniper"></div>';
    }else{
          text += '<div id="'+i+'" class="box soldier"></div>';
    }

  }
  container.innerHTML = text;
}
