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

export interface Subscribe {
  member_id: number;
  option_id: number;
  custom_price: number;
  is_auto_renewal: boolean;
}

export interface Suggestion {
 member_id: number;
 service_id: number;
 score: number;
 reason: string; 
}