export interface IError {
  message: string;
}

export interface IErrorResponse {
  success: boolean;
  statusCode: number;
  data: IError;
}

interface IProductImage {
  title: string
  description: string
  url: string
}

export interface IProduct {
  id: number,
  name: string
  description: string,
  ean: string,
  upc: string,
  image: string,
  images: IProductImage[]
  net_price: number,
  taxes: number,
  price: number,
  tags: string[]
}