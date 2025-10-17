export const log = (message: string) => {
  const ts = new Date().toISOString();
  console.warn(`[${ts}] ${message}`);
};
