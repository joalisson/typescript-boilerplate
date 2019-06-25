const awaitHandlerFactory = middleware => async (req, res, next) => {
  try {
    await middleware(req, res, next);
  } catch (err) {
    next(err);
  }
};

export default awaitHandlerFactory;
