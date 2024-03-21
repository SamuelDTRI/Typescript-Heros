// Narrowing Typescript

// Podemos entender el narrowing como un embudo que va guiando el camino de que queremos manejar en esta funcion por ejemplo, que tipo de datos quiero validar y quiatr los demas

function ShowLength(obj: string | number) {
  if (typeof obj === "string") {
    return obj.length;
  }
  return obj.toString();
}

ShowLength("1");

interface Marcus {
  company: "Activision";
  name: string;
  shatter: () => void;
}

interface MasterChief {
  company: "Bungie";
  name: string;
  shoot: () => void;
}

type Character = Marcus | MasterChief;

function Play(character: Character) {
  if (character.company === "Activision") {
    character.shatter(); // <== este es marcus finix
    return;
  }

  character.shoot();

  //   if(typeof character.shoot === "function"){
  //     character.shoot()
  //   }
}

//----------------------------------------------------------------

//Manera dos de hacer el ejemplo de arriba:

interface Marcus {
  name: string;
  shatter: () => void;
}

interface MasterChief {
  name: string;
  shoot: () => void;
}

type CharacterTwo = Marcus | MasterChief;

// TYPE GUARD   por lo genral deberia evitar usar los type Guards
function checkIsValid(character: Character): character is MasterChief {
  return (character as MasterChief).shoot != undefined;
}

function PlayAgain(character: CharacterTwo) {
  if (checkIsValid(character)) {
    character.shoot();
  }
}

//Ejemplo hecho por mi

interface Goku {
  company: "DBZ";
  name: string;
  power: string;
  fly: () => void;
}

interface Naruto {
  company: "Naruto Shipudden";
  name: string;
  power: string;
  multiply: () => void;
}

type CharacterThree = Goku | Naruto;

function CheckGoku(character: CharacterThree): character is Goku {
  return (character as Goku).fly() != undefined;
}

function PLayTryAgain(character: CharacterThree) {
  if (CheckGoku(character)) {
    character.fly();
  }
}

// Otro ejemplo para asegurarme de entender

interface Ghost {
  Company: "Activision";
  name: string;
  shoot: () => void;
}

interface Kratos {
  company: "GOW";
  name: string;
  destroyGods: () => void;
}

type CharacterFour = Ghost | Kratos;

function CheckGhost(character: CharacterFour): character is Kratos {
  return (character as Kratos).destroyGods != undefined;
}

function PlayFour(character: CharacterFour) {
  if (CheckGhost(character)) {
    return character.destroyGods();
  }
}

// Otro ejemplo para asegurarme de entender penultima vez

interface Chuli {
  Owner: "Samito";
  name: string;
  lick: () => void;
}

interface Picha {
  Owner: "Teo";
  name: string;
  lieDown: () => void;
}

type Cat = Chuli | Picha;

function checkCat(cat: Cat): cat is Chuli {
  return (cat as Chuli).lick != undefined;
}

function PlayCat(cat: Cat) {
  if (checkCat(cat)) {
    return cat.lick();
  }
}

// Otro ejemplo para asegurarme de entender ultima vez

interface Cr7 {
  company: "Al Nassar";
  name: string;
  speed: () => void;
}

interface Messi {
  company: "Miami";
  name: string;
  bargain: () => void;
}

type SoccerPlayer = Cr7 | Messi;

function ChecKPlayerSoccer(player: SoccerPlayer): player is Messi {
  return (player as Messi).bargain != undefined;
}

function PlaySocccer(player: SoccerPlayer) {
  if (ChecKPlayerSoccer(player)) {
    return player.bargain();
  }
}
