const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

const currencyFormatterPrecise = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 2,
});

export function formatCurrency(amount: number, precise = false): string {
  return (precise ? currencyFormatterPrecise : currencyFormatter).format(amount);
}

export function formatPercent(rate: number): string {
  // Show exactly as many decimal places as the rate needs, so 10.75% and
  // 39.35% never get rounded down to one decimal place (e.g. "10.8%").
  const value = Math.round(rate * 100 * 100) / 100;
  const decimals = Number.isInteger(value) ? 0 : Number.isInteger(value * 10) ? 1 : 2;
  return `${value.toFixed(decimals)}%`;
}
