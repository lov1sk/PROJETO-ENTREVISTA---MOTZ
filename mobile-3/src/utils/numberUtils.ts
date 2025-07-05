export const toMoney = (value: number = 0) =>
  Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value || 0);

export const toLocaleString = (value: number, dp: number = 0) =>
  value.toLocaleString("pt-BR", {
    maximumFractionDigits: dp,
    minimumFractionDigits: dp,
  });
