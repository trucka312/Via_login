export const validateEmail = (email) => {
  if (email === "") return true;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePhoneNumber = (phoneNumber) => {
  const regex = /^\+?[0-9]{10}$/;

  return regex.test(phoneNumber);
};

export const validateReferralPhoneNumber = (referralPhoneNumber) => {
  if (referralPhoneNumber === "") return true;
  const regex = /^\+?[0-9]{10,15}$/;

  return regex.test(referralPhoneNumber);
};

export const validatePassword = (password) => {
  if (!password || password.length < 9) return false;
  const hasNumber = /\d/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);
  return hasNumber && hasUpperCase && hasLowerCase && hasSpecialChar;
};

export const validateUserName = (value) => {
  const isPhoneNumber = validatePhoneNumber(value);
  const isEmail = validateEmail(value);

  if (isPhoneNumber || isEmail) {
    return true;
  } else {
    return false;
  }
};