export const validators = {
  isEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isPhoneNumber: (phone: string): boolean => {
    const phoneRegex = /^[0-9]{9,15}$/;
    return phoneRegex.test(phone.replace(/[\D]/g, ''));
  },

  isEmpty: (value: any): boolean => {
    return value === null || value === undefined || value.toString().trim() === '';
  },
};
