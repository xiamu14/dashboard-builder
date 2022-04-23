export const toYuan = (price: number) => {
  // return price > 0 ? (price / 100).toFixed(2) : '0'
  return price > 0 ? Number((price / 100).toFixed(3).slice(0, -1)) : 0;
};
