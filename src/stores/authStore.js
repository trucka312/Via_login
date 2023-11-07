import { create } from "zustand";
import { RepositoryRemote } from "../services";
import { toast } from "react-toastify";

export const useAuthStore = create((set) => ({
  tokenInfo: {},
  loading: false,
  login: async (form, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.auth.login(form);
      onSuccess(response.data);
    } catch (error) {
      onFail(error?.response?.error || "Có lỗi xảy ra!");
    }
    set({ loading: false });
  },
  register: async (form, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.auth.register(form);
      if (response.data.errorCode == 200 || response.data.errorCode == 201){
        onSuccess();
        toast.success("Đăng kí thành công =)) chào");
      } else {
        onFail();
        toast.error(response.data.error || "Có lỗi xảy ra");
      }
    } catch (error) {
      toast.error(error.response.error || "Có lỗi xảy ra");
    }
    set({ loading: false });
  },
  forgotPassword: async (userName, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.auth.forgotPassword(userName);
      if (response.data.errorCode === 200 || response.data.errorCode === 201) {
        onSuccess();
        toast.success("Mã OTP đã được gửi!");
      } else {
        onFail();
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Có lỗi xảy ra");
    }
    set({ loading: false });
  },
  validateOtp: async (userName, otp, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.auth.validateOtp(userName, otp);
      if (response.data.errorCode === 200 || response.data.errorCode === 201) {
        onSuccess();
      } else {
        onFail();
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Có lỗi xảy ra");
    }
    set({ loading: false });
  },
  resetPassword: async (form, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.auth.resetPassword(form);
      if (response.data.errorCode === 200 || response.data.errorCode === 201) {
        onSuccess();
      } else {
        onFail();
      }
    } catch (error) {
      onFail(error?.response?.data?.msg || "Có lỗi xảy ra!");
    }
    set({ loading: false });
  },
}));
