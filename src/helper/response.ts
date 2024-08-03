export const response = async (data: any, message: any) => {
  return {
    data,
    message,
    success: !message,
  };
};
