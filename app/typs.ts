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

export interface SupCategory {
  description: string;
  list: boolean;
  name: string;
  options: {}[];
  id: number;
}
