export interface Categories {
  id?: number;
  name: string;
  description: string;
  children: Children[];
}

export interface Children {
  name: string;
  id: number;
  slug: string;
}

export interface InputData {
  id: number;
  name: string;
  description: string;
  children: Children[];
}
