export interface Service {
  id: string;
  logo: string;
  name: string;
  english_name: string;
  description: string;
  genre: string;
}

export interface Option {
  id: string;
  service_id: string;
  name: string;
  monthly_price: number;
  yearly_price: number;
  opt_description: string;
}