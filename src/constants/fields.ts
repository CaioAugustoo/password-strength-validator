export const fields = {
  ensureUppercase: {
    regex: /(?=.*[A-Z])/,
    message: "Password contain at least one uppercase letter",
  },
  ensureOneSpecialChar: {
    regex: /(?=.*[!@#$&*])/,
    message: "Password contain at least one special character",
  },
  ensureTwoDigits: {
    regex: /(?=.*[0-9].*[0-9])/,
    message: "Password contain at least two digits",
  },
  ensureThreeLowerCase: {
    regex: /(?=.*[a-z].*[a-z].*[a-z])/,
    message: "Password contain at least 3 lowercase letters",
  },
  ensureMinLength: {
    regex: /(.{8})/,
    message: "Password has a minimum length of 8 characters",
  },
};
