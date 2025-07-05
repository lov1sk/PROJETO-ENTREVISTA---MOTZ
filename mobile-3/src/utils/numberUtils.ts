export const toMoney = (value: number = 0) =>
  Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value || 0);
