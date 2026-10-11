export interface Element {
  id: number;
  nom: string;
  categoria: string;
  preu: number;
  disponible: boolean;
}

export interface ElementCataleg {
  id: number;
  titol: string;
  categoria: string;
  preu: number;
  dataActualitzacio: string;
  percentatgeDisponibilitat: number;
  disponible: boolean;
}

export type EstatLlista = 'carregant' | 'buit' | 'error' | 'disponible';