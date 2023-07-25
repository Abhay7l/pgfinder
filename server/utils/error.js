export const createError = (user,status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
  };
