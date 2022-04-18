export interface Company{
  id: number;
  name: string;
}

export interface Vacancy {
  id: number;
  name: string;
  company: number;
}

export interface AuthToken {
  token: string;
}
