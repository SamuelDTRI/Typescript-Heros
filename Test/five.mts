//Interfaces con Typescript

// type Hero = {
//   name: string;
//   age: number;
//   numberisActive: boolean;
// };

interface Hero {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  lige: string;
}

let hero: Hero = {
  id: 1,
  name: "batman",
  age: 35,
  isActive: true,
  lige: "Dc",
};

//Interfaz anidada

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discount?: number;
  available: boolean;
}

interface Sniker extends Item {
  size: number;
}

interface ShoppingCart {
  totalPrice: number;
  totalItems: Sniker[]; // Tambien puedo utilizar un condicional or (Item | Sniker)[] Igual que en los tipos
}

interface CartOps {
  add: (item: Item) => void;
  remove: (id: number) => void;
}

interface CartOps {
  clear(): void;
}

const ops: CartOps = {
  add: (item: Item) => {},
  remove: (id: number) => {},
  clear: () => {},
};

const cart: ShoppingCart = {
  totalPrice: 23,
  totalItems: [
    {
      id: 1,
      name: "Soup",
      price: 10,
      quantity: 2,
      available: true,
      size: 2,
    },
  ],
};
