const validateReasonForSparing: (reasonForSparing: string) => string[] = (
  reasonForSparing
) => {
  const errorMessages: string[] = [];
  if (reasonForSparing.length == 0) return [];

  if (reasonForSparing.length < 17 || reasonForSparing.length > 153)
    errorMessages.push("Reason must be between 17 and 153 characters long");
  return errorMessages;
};

export default validateReasonForSparing;
