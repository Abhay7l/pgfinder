export const createError = (user,status, message) => {
  console.log(`${user}`)
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
  };
