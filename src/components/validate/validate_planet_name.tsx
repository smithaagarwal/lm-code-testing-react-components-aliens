const validatePlanetName: (planetName: string) => string[] = (planetName) => {
  const errorMessages: string[] = [];
  if (planetName.length == 0) return [];

  if (!/^[a-zA-Z0-9]+$/.test(planetName))
    errorMessages.push("Planet name can only contain alphabets or numbers");
  if (planetName.length < 2 || planetName.length > 49)
    errorMessages.push(
      "Planet name length should be between 2 and 49 characters"
    );
  return errorMessages;
};

export default validatePlanetName;
