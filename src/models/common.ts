type Cobertura = string;

export type Tenencia = {
  code: string;
  id: number;
  nombre: string;
  canal: number;
  coberturas: Cobertura[];
};
