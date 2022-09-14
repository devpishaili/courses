export const compactNumberFormat = (a: number) => {
  return Intl.NumberFormat("en", {
    notation: "compact",
    style: "currency",
    currency: "NGN",
  }).format(a);
};
