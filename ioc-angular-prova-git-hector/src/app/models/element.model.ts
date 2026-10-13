export type CategoriaElement = 'Electrònica' | 'Àudio' | 'Accessoris' | 'Pantalles' | 'Energia' | 'icones' | 'paletes' | 'tipografia';

export interface Element {
  id: number;
  titol: string;
  descripcio: string;
  categoria: CategoriaElement;
  dataActualitzacio: string;
  valoracio?: number;
  destacat?: boolean;
  preu?: number;
  percentatgeDisponibilitat?: number;
  disponible?: boolean;
}

// Tipo alternativo para el Signals de Control de Flux
export type ElementCataleg = Element;
export type EstatLlista = 'carregant' | 'buit' | 'error' | 'disponible';


