// THis needs to happen on the backend.

export function formatCardNumber(val: string) {
  const maskedSection = val.slice(0, -4).replace(/./g, ".");
  const lastFour = val.slice(-4);
  return maskedSection + lastFour;
}
