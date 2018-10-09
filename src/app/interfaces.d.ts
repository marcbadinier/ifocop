export interface IProduit
{
  name: string;
  description: string;
  price: number;
  instock: boolean;
  image: string;
  rating: number;
  id: string;
}

export interface Cart {
  lines: {[name: string]: CartItem};
  total: number;
  shippingCost: number;
  nbItems: number;
}

export interface CartItem {
  product: IProduit;
  qty: number;
  itemTotal: number
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
