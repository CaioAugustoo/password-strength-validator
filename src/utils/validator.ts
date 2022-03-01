import { fields } from "../constants/fields";

type ValidatorFields = typeof fields;
type ValidatorFieldsKeys = keyof ValidatorFields;
type ValidatorMessage = ValidatorFields[ValidatorFieldsKeys]["message"];
type ValidatorResult = { [message: ValidatorMessage]: boolean };

export function validatePasswordStrength(password: string): ValidatorResult {
  const validatedPasswordObjResult: ValidatorResult = {};
  const fieldsValues = Object.values(fields);

  fieldsValues.forEach(({ regex, message }) => {
    const isPasswordMatchedWithRegex: boolean = regex.test(password);
    validatedPasswordObjResult[message] = isPasswordMatchedWithRegex;
  });

  return validatedPasswordObjResult;
}
