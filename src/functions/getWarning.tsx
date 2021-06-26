export const getWarning = (age: number, temperature: number) => {
  if (age < 3) {
    if (temperature < 37) {
      return "Ok";
    } else if (temperature >= 37 && temperature < 38) {
      return "Alert";
    } else if (temperature >= 38) {
      return "High_Alert";
    }
  } else {
    if (temperature < 37) {
      return "Ok";
    } else if (temperature >= 37 && temperature < 38) {
      return "Warning";
    } else if (temperature >= 38 && temperature < 39) {
      return "Alert";
    } else if (temperature >= 39) {
      return "High_Alert";
    }
  }
};
