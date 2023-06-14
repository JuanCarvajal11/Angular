export interface ChangeBadge<T> {
  result: Result;
  status: string;
}

interface Result {
  updated:  string;
  source:   string;
  target:   string;
  value:    number;
  quantity: number;
  amount:   number;
}
