// consigne ecrire un algoritme qui en bouclant sur un tableau de mot raconte une histoire 
// exemple: 
//  tableau = "mots", "mots", "mots"
//  pour chaque "mots" du "tableau":
//        ecrire le mot     



// Code d'el Roliste
var textRoll = `Il était une lapine, qui un matin, c'est levée en voulant une carrote. "Oh, je voudrais tant manger votre carotte Monsieur!" dit-elle à un passant. Alors, le passant sorti sa carrote en lui précisant bien "Savoure petite, je te donne volontier ma grosse carotte". Ainsi, c'est avec le ventre bien plein que la jeune lapine commença la journée.`
var tableauRoll = textRoll.split(' ');
console.log(tableauRoll.join(' '));

// Boucle Cristian for

const blague = ["C'est", " l'histoire  ","du", "ptit dej",", tu","la","connais", "?"];
const reponse =["Pas", "de","bol."];
let question = "";
let repo = "";

for (let i = 0; i < blague.length; i++) {
    question +=blague[i]+" ";
  }
  document.getElementById("blague").innerHTML = question;

  for (let j = 0; j < reponse.length; j++) {
    repo +=reponse[j]+" ";
  }
  document.getElementById("answer").innerHTML = repo;

// Boucle For element in Cristian

for (elem of blague){
    document.write(elem+" ");
}
document.write("<br>");

for (rep of reponse){
    document.write(rep+" ");
}

// Debut de boucle For de Emilie
const jeanne = ["mange", "prend son bain", "met son pyj", "cale son biberon", "se brosse les dents", "se fait lire une histoire par Dada", "dort, god willing."]
let text = "";
for (let i = 0; i < jeanne.length; i++) {
text += jeanne[i] ;
}

document.getElementById("demo").innerHTML = jeanne.join (" ensuite elle <br>");
// Fin de boucle for de Emilie