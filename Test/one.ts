// --------------------------------------------------------------------------------------------------------------------------------

// function saludar(name: string) {
//   console.log(`Hola ${name}`);
// }

// --------------------------------------------------------------------------------------------------------------------------------

// function saludar({ name, age }) {
//   console.log(`Hola ${name} tienes ${age} años`);
// }
// saludar({ name: 2, age: "pepe" });     //ESTO TYPESCRIPT LO COMPILA SIN RESTRICCION ALGUNA ESO ESTA MAL, DEBEMOS ESPECIFICAR SIEMPRE LOS TIPOS.

// --------------------------------------------------------------------------------------------------------------------------------

// function saludar(name: string, age: number) {
//     console.log(`Hola  ${name} tienes ${age} años`);   // ACA SE ASIGNA EL VALOR DE NAME COMO "STIRNG" Y EL DE AGE COMO "NUMBER" CUIDADO
// }
// saludar({ name: 2, age: "PEPE" });

// --------------------------------------------------------------------------------------------------------------------------------
//TIPAR FUNCTIONS NORMALES
function saludar({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name} tienes ${age} años `);
} // FORMA 1 DE HACER LA ASIGNACION DE TIPOS

saludar({ name: "pepe", age: 2 });

// --------------------------------------------------------------------------------------------------------------------------------

function saludarDos(persona: { name: string; age: number }) {
  const { name, age } = persona;
  console.log(`Hola ${name} tienes ${age} años `);
} // FORMA 2 DE HACER LA ASIGNACION DE TIPOS

saludarDos({ name: "pepe", age: 2 });

// --------------------------------------------------------------------------------------------------------------------------------

function saludarTres({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name} tienes ${age} años `);
  return age;
} // FORMA 3 DE HACER LA ASIGNACION DE TIPOS

// --------------------------------------------------------------------------------------------------------------------------------

const sayFromFuction = (fn: (name: string) => void) => {
  fn("Samuel");
};

const sayHi = (name: string) => {
  console.log(`Hola ${name}`);
}; // MANERA DE LLAMAR FUNCIONES SIN IMORTAR QUE DEBA DEVOLVER IMPORTANTE EL VOID

sayFromFuction(sayHi);

// --------------------------------------------------------------------------------------------------------------------------------
//TIPAR ARROW FUNCTIONS
const sumar = (a: number, b: number): number => {
  return a + b;
};

const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

// --------------------------------------------------------------------------------------------------------------------------------
//NEVER

function throwError(message: string): never {
  //Esto nunca va a devolver nada
  throw new Error(message);
}

function logMessage(message: string): void {
  //Esto no nos importa que devuelva aunque llegue algo no importa que a diferencia del never
  console.log(message);
}

// --------------------------------------------------------------------------------------------------------------------------------
// Inferencia funciones anonimas segun el contexto
const avengers = ["Spidey", "Hulk", "Captain America"];

avengers.forEach((avenger) => {
  console.log(avenger.toUpperCase());
});

// --------------------------------------------------------------------------------------------------------------------------------
//Objetos

//Type Alias

// type Hero = {       //Para los Types siempre pascal case
//   name: string,
//   age: number
// }

// let hero: Hero = {
//   name: "Thor",
//   age: 1500,
// };

//hero.name = 31224                 //NO puedo asignarle un tipo de valor distinto al que ya tiene asignado en este caso es string no va pasar a numero
//hero.power ) 100                  //NO puedo crear una nueva propiedad ya que solo tengo creadas dos anteriormente

// function createHero(name: string, age: number): Hero {          //Manera 1 de hacerlo
//   return { name, age };
// }

// const thor = createHero("Thor", 1500);

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero      //Manera 2 de hacerlo
//   return { name, age };
// }

// const thor = createHero({ name: "Thor", age: 3000 });

// --------------------------------------------------------------------------------------------------------------------------------

// Template union types        similar a las validaciones de js REGEX

// type HexadecimalColor = `#${string}`;

// const color: HexadecimalColor = "0033ff"; //hexadecimales
// const color2: HexadecimalColor = "#0033ff"; //hexadecimales

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// Optional properties

// type Hero = {
//   //podemos añadirle propiedades por seguridad como readonly
//   readonly id?: HeroId; //no lo hace inmutable pero si da error, en js tendriamos que hacer un Objectfreeze
//   name: string;
//   age: number;
//   isActive?: boolean; // Optional properties como esta osea que es opcional, si esta o no pues no importa es opcional y sha
// };

// let hero: Hero = {
//   name: "Thor",
//   age: 1500,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return { id: crypto.randomUUID(), name, age, isActive: true };
// }

// const thor = Object.freeze(createHero({ name: "Thor", age: 1500 }));

// --------------------------------------------------------------------------------------------------------------------------------

// Union types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale =
//   | `Local`
//   | "Planetary"
//   | "Galactic"
//   | "Universal"
//   | "Multiversal";

// type Hero = {
//   readonly id?: HeroId;
//   name: string;
//   age: number;
//   isActive?: boolean;
//   powerScale?: HeroPowerScale;
// };

// let hero: Hero = {
//   name: "Thor",
//   age: 1500,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return { id: crypto.randomUUID(), name, age, isActive: true };
// }

// const thor = createHero({ name: "Thor", age: 2000 });
// thor.powerScale = "Universal";

// --------------------------------------------------------------------------------------------------------------------------------
//Intersection types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale =
//   | `Local`
//   | "Planetary"
//   | "Galactic"
//   | "Universal"
//   | "Multiversal";

// type HeroBasicInfo = {
//   name: string;
//   age: number;
// };

// type HeroProperties = {
//   readonly id?: HeroId;
//   isActive?: boolean;
//   powerScale?: HeroPowerScale;
// };

// type Hero = HeroBasicInfo & HeroProperties;

// let hero: Hero = {
//   name: "Thor",
//   age: 1500,
// };

// function createHero(input: HeroBasicInfo): Hero {
//   const { name, age } = input;
//   return { id: crypto.randomUUID(), name, age, isActive: true };
// }

// const thor = createHero({ name: "Thor", age: 2000 });
// thor.powerScale = "Universal";

// --------------------------------------------------------------------------------------------------------------------------------

// Type indexing

// type HeroProperties = {
//   isActive: boolean;
//   address: {
//     planet: string;
//     city: string;
//   };
// };

// const addressHero: HeroProperties["address"] = {
//   planet: "Earth",
//   city: "Madrid",
// };

// Type from value

// const address = {
//   planet: "Earth",
//   city: "Madrid",
// };

// type Address = typeof address;

// const addressTwitch: Address = {
//   planet: "Mars",
//   city: "Twitch",
// };

//Type from function return

// function createAddress() {
//   return {
//     planet: "Tierra",
//     city: "Barcelona",
//   };                                // es similar a la herencia de js nativo
// }

// type Adress = ReturnType<typeof createAddress>;

// Arrays

// const languajes = []   // que siempre este vacio xd

// const languajes: string [] = []

// languajes.push("javascript")

// const languajes: (string | number)[] = []

// languajes.push("javascript")
// languajes.push(3)

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale =
//   | `Local`
//   | "Planetary"
//   | "Galactic"
//   | "Universal"
//   | "Multiversal";

// type HeroBasicInfo = {
//   name: string;
//   age: number;
// };

// const herosWithBasicInfo: HeroBasicInfo[] = []

//Matrices y tuplas

// [
//   ["x", "o", "x"]
//   ["o", "x", "o"]
//   ["x", "", "o"]
// ]

// Las tuplas es un array que tiene un limite fijado de longitud

// type CellValue = "X" | "O" | "";
// type GameBoard = [
//   [CellValue, CellValue, CellValue],
//   [CellValue, CellValue, CellValue],
//   [CellValue, CellValue, CellValue]
// ];

// const gameBoard: GameBoard = [
//   ["X", "O", "X"],
//   ["O", "X", "O"],
//   ["X", "", "O"],
// ];

// Ejemplos sencillos de tuplas similares a estados de react en el frontend

// type State = [string, (newName: string) => void]
// const [hero, setHero ]: State = useState("Thor")

// type RGB = [number, number, number];
// const rgb: RGB = [255, 255, 0];
