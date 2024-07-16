// THis needs to happen on the backend.

export function formatCardNumber(val: string): string {
  const maskedSection = val.slice(0, -4).replace(/./g, ".");
  const lastFour = val.slice(-4);
  return maskedSection + lastFour;
}

export function formatDate(daysToAdd: number): string {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + daysToAdd);
  return currentDate.toISOString().split("T")[0];
}
