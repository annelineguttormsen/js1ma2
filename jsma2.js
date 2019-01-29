//OPPGAVE 1
var objekt = function() {
    this.name = "foo",
    this.age = "oof"
};
objekt.prototype.sex = "female";

var o = new objekt();

console.log("o har ikke satt en verdi til \"sex\" og henter sex i prototypen til objekt, som er \"" + o.sex + "\"");

//OPPGAVE 2
var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.slice(4,5));

//OPPGAVE 3
console.log(numbers.pop());
console.log(numbers);

//OPPGAVE 4
var statement = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";

function replaceThis(oldWord,newWord) {
    statement = statement.replace(oldWord,newWord);
    console.log(statement);
}
replaceThis(/strawberry|strawberrie/gi, "banana");

//OPPGAVE 5
var knapp = document.getElementById("knapp");
knapp.addEventListener("click",fjernListe);

var manneGreier = ["BUL", "ALTA IF", "Vålerenga", "Brann"];

function fjernListe() {
    manneGreier.splice(0,manneGreier.length, "toyota","vrom","gul bil");
    console.log("listen består nå av " + manneGreier);
}

//OPPGAVE 6
var hege = {name:"Hege", age:40};
var ante = {name:"Ante", age:42};
var ronny = {name:"Ronny", age:50};

var folk = [hege,ante,ronny];
var nyeFolk = folk.filter(word => word.name == "Hege");
console.log(nyeFolk);

//OPPGAVE 7
function currentDate() {
    var dagenidag = new Date();
    var dag = dagenidag.getDate();
    var mned = (dagenidag.getMonth() + 1);
    var time = dagenidag.getHours();
    var minutter = dagenidag.getMinutes(); 
    console.log(dag + "/" + mned + " " + time + ":" + minutter);
}currentDate();