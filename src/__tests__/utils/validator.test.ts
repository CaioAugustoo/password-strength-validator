import { validatePasswordStrength } from "../../utils/validator";

test("should ensure only at least one uppercase letter", () => {
  expect(validatePasswordStrength("abcdefgh")).toEqual({
    "Password contain at least one uppercase letter": false,
    "Password contain at least one special character": false,
    "Password contain at least two digits": false,
    "Password contain at least 3 lowercase letters": true,
    "Password has a minimum length of 8 characters": true,
  });

  expect(validatePasswordStrength("abcdefgh")).not.toEqual({
    "Password contain at least one uppercase letter": false,
    "Password contain at least one special character": true,
    "Password contain at least two digits": true,
    "Password contain at least 3 lowercase letters": true,
    "Password has a minimum length of 8 characters": true,
  });

  expect(validatePasswordStrength("aBcdefgh")).toEqual({
    "Password contain at least one uppercase letter": true,
    "Password contain at least one special character": false,
    "Password contain at least two digits": false,
    "Password contain at least 3 lowercase letters": true,
    "Password has a minimum length of 8 characters": true,
  });
});

test("should ensure only at least one special character", () => {
  expect(validatePasswordStrength("abcdefgh@")).toEqual({
    "Password contain at least one uppercase letter": false,
    "Password contain at least one special character": true,
    "Password contain at least two digits": false,
    "Password contain at least 3 lowercase letters": true,
    "Password has a minimum length of 8 characters": true,
  });

  expect(validatePasswordStrength("abcdefgh")).not.toEqual({
    "Password contain at least one uppercase letter": false,
    "Password contain at least one special character": false,
    "Password contain at least two digits": false,
    "Password contain at least 3 lowercase letters": false,
    "Password has a minimum length of 8 characters": false,
  });
});

test("should ensure only at least 3 lowercase letters", () => {
  expect(validatePasswordStrength("abcdDSAgh")).toEqual({
    "Password contain at least one uppercase letter": true,
    "Password contain at least one special character": false,
    "Password contain at least two digits": false,
    "Password contain at least 3 lowercase letters": true,
    "Password has a minimum length of 8 characters": true,
  });

  expect(validatePasswordStrength("abDDcdefgh")).not.toEqual({
    "Password contain at least one uppercase letter": false,
    "Password contain at least one special character": true,
    "Password contain at least two digits": false,
    "Password contain at least 3 lowercase letters": false,
    "Password has a minimum length of 8 characters": false,
  });
});

test("should ensure if password has a minimum length of 8 characters", () => {
  expect(validatePasswordStrength("a")).toEqual({
    "Password contain at least one uppercase letter": false,
    "Password contain at least one special character": false,
    "Password contain at least two digits": false,
    "Password contain at least 3 lowercase letters": false,
    "Password has a minimum length of 8 characters": false,
  });

  expect(validatePasswordStrength("abCD")).toEqual({
    "Password contain at least one uppercase letter": true,
    "Password contain at least one special character": false,
    "Password contain at least two digits": false,
    "Password contain at least 3 lowercase letters": false,
    "Password has a minimum length of 8 characters": false,
  });

  expect(validatePasswordStrength("abDDcdefgh")).not.toEqual({
    "Password contain at least one uppercase letter": false,
    "Password contain at least one special character": true,
    "Password contain at least two digits": true,
    "Password contain at least 3 lowercase letters": true,
    "Password has a minimum length of 8 characters": true,
  });
});
