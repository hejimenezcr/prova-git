import { Element, ElementApiResponse } from '../models/element.model';

const CATEGORIES_NORMALITZADES: Record<string, string> = {
  electronics: 'Electrònica',
  electronica: 'Electrònica',
  displays: 'Pantalles',
  communication: 'Comunicació',
};

const IMATGE_PER_DEFECTE = 'https://placehold.co/300x200?text=Sense+imatge';

function normalitzaCategoria(categoria: string | undefined): any {
  const neta = (categoria ?? '').trim();
  return CATEGORIES_NORMALITZADES[neta.toLowerCase()] ?? neta;
}

function numeroSegur(valor: unknown, perDefecte = 0): number {
  const n = Number(valor);
  return Number.isFinite(n) ? n : perDefecte;
}

export function adaptarElementApi(apiElement: ElementApiResponse): Element {
  return {
    id: String(apiElement.id),
    titol: (apiElement.nom || apiElement.titol || '').trim(),
    descripcio: (apiElement.descripcio ?? '').trim(),
    categoria: normalitzaCategoria(apiElement.categoria),
    preu: numeroSegur(apiElement.preu),
    imatge: apiElement.imatge?.trim() || IMATGE_PER_DEFECTE,
    esPopular: apiElement.popular === true,
    stock: numeroSegur(apiElement.stock),
    dataActualitzacio: new Date().toISOString().split('T')[0],
    dataAfegit: new Date(),
  };
}

export function adaptarElementsApi(apiElements: ElementApiResponse[]): Element[] {
  return apiElements.map(adaptarElementApi);
}

export function elementBuit(): Element {
  return {
    id: '',
    titol: '',
    descripcio: '',
    categoria: 'Electrònica',
    preu: 0,
    imatge: IMATGE_PER_DEFECTE,
    esPopular: false,
    stock: 0,
    dataActualitzacio: new Date().toISOString().split('T')[0],
    dataAfegit: new Date(),
  };
}