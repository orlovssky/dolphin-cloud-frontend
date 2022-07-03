const hasValidValue = (item: string) => {
  const value = localStorage.getItem(item);

  return value && value !== "null" && value !== "undefined";
};

const getValue = (item: string) => {
  if (hasValidValue(item)) {
    return localStorage.getItem(item);
  }

  return null;
};

export { hasValidValue, getValue };
