export function validate(data: Object, isIncome: Boolean) {
  const validated = {
    isValid: true,
    errors: {
      amountErrors: [] as String[],
      nameErrors: [] as String[],
      typeErrors: [] as String[],
    },
  };

  //@ts-ignore;
  const { name, amount, type } = data;

  if (!amount) {
    validated.isValid = false;
    validated.errors.amountErrors.push("Amount needs to be added");
  } else if (amount < 1 && isIncome) {
    validated.isValid = false;
    validated.errors.amountErrors.push("Amount needs to be a positive number");
  } else if (amount >= 0 && !isIncome) {
    validated.isValid = false;
    validated.errors.amountErrors.push("Amount needs to be a negative number");
  }

  if (!name.trim()) {
    validated.isValid = false;
    validated.errors.nameErrors.push("Name needs to be added");
  }

  if (!type.trim()) {
    validated.isValid = false;
    validated.errors.typeErrors.push("Type needs to be selected");
  }

  return validated;
}
