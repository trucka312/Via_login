import { callApi } from "../apis";

const login = (form) => {
  return callApi(`/ExamUser/login`, "post", form);
};
const register = (form) => {
  return callApi(`/ExamUser/register-user`, "post", form);
};

const resetPassword = (form) => {
  return callApi(`/ExamUser/change-password`, "post", form);
};


const forgotPassword = (userName) => {
  return callApi(`/ExamUser/get-otp-change-password?userName=${userName}`, 'get');
};

const validateOtp = (userName, otp) => {
  return callApi(`/ExamUser/get-otp-change-password?userName=${userName}&otpCode=${otp}`, 'get');
};

export const auth = {
  login,
  register,
  resetPassword,
  forgotPassword,
  validateOtp,
};
