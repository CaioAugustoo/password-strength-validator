import { validatePasswordStrength } from "./utils/validator";

import prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "invisible",
    name: "password",
    message: "Enter a password",
    validate: (password: string) =>
      password.trim().length > 0 ? true : "Password cannot be empty",
  });

  Object.entries(validatePasswordStrength(response.password)).forEach(
    ([message, isValid]) => {
      console.log(isValid ? `✅ ${message}` : `❌ ${message}`);
    }
  );
})();
