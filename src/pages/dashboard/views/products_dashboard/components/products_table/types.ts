export interface ProductDetail {
  key: string;
  product: {
    image: string;
    name: string;
    desc: string;
  };
  status: { isActive: boolean };
  price: string;
  sales: {
    current: string;
    isRise: boolean;
    percent: number;
  };
  views: string;
  likes: string;
}
