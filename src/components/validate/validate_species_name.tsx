const validateSpeciesName: (speciesName: string) => string[] = (
  speciesName
) => {
  const errorMessages: string[] = [];
  if (speciesName.length == 0) return [];

  if (!/^[a-zA-Z]+$/.test(speciesName))
    errorMessages.push("Species name can only contain alphabets");
  if (speciesName.length < 3 || speciesName.length > 23)
    errorMessages.push(
      "Species name length should be between 3 and 23 characters"
    );
  return errorMessages;
};

export default validateSpeciesName;
