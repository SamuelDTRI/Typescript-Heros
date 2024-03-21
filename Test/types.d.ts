// Los archvios con la extension .d.ts se deben mantener como convencio que es donde estaran simepre las definiciones de tipos o de interfaces por lo general, esto quiere decir que aca nunca deberias tener codigo normal. (Solo declaraciones en estos archvios .d.ts) type e interfaces

export interface IAvenger {
  name: string;
  powerScore: number;
  wonBattles: number;
  age: number;
  battle: () => void;
}

