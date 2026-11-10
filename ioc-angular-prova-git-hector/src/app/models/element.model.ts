//export type CategoriaElement = 'Electrònica' | 'Àudio' | 'Accessoris' | 'Pantalles' | 'Energia' | 'icones' | 'paletes' | 'tipografia';
export type CategoriaElement = 'Electrònica' | 'Àudio' | 'Accessoris' | 'Pantalles' | 'Energia' | 'icones' | 'paletes' | 'tipografia' | 'UI' | 'Backend';

export interface VariantElement {
  color: string;
  estoc: number;
  preu: number;
}

export interface DistribucioElement {
  carrer: string;
  ciutat: string;
  codiPostal: string;
}

export interface Element {
  id: number | string;
  codi?: string;
  titol: string;
  descripcio: string;
  categoria: CategoriaElement;
  dataActualitzacio: string;
  valoracio?: number;
  destacat?: boolean;
  preu?: number;
  pressupost?: number;
  percentatgeDisponibilitat?: number;
  disponible?: boolean;
  variants?: VariantElement[];
  distribucio?: DistribucioElement;
  imatge?: string;
  esPopular?: boolean;
  stock?: number;
  dataAfegit?: Date;
}
/*
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
}*/

export interface ElementApiResponse {
  id: string | number;
  nom?: string;
  titol?: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatge?: string;
  popular?: boolean;
  stock?: number;
}

// Tipo alternativo para el Signals de Control de Flux
export type ElementCataleg = Element;

export type EstatServei = 'inicial' | 'carregant' | 'exit' | 'error';
export type EstatLlista = 'carregant' | 'buit' | 'error' | 'disponible';

export interface EstatElements {
  estat: EstatServei;
  elements: Element[];
  error?: string;
}

export interface CriterisCerca {
  terme: string;
  categoria: CategoriaElement | 'Totes' | '';
}
