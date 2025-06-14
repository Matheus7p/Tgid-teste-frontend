export const formatToBRL = (value: number) => {
  return new Intl.NumberFormat("pt-BR").format(value);
}