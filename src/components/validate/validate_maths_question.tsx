const validateMathsQuestion: (whatIsTwoPlusTwo: string) => string[] = (
  whatIsTwoPlusTwo
) => {
  const errorMessages: string[] = [];
  if (!whatIsTwoPlusTwo) return [];

  if (whatIsTwoPlusTwo !== "4") errorMessages.push("Wrong answer");
  return errorMessages;
};

export default validateMathsQuestion;
