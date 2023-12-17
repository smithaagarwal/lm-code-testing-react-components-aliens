const validateNumberOfBeings: (
  numberOfBeings: number | undefined
) => string[] = (numberOfBeings) => {
  const errorMessages: string[] = [];
  if (!numberOfBeings) return [];
  if (numberOfBeings && numberOfBeings >= 1000000000) return [];
  else
    errorMessages.push("There must be atleast 1000,000,000 number of beings");
  return errorMessages;
};

export default validateNumberOfBeings;
