const authRouter = require('../routes/authRoutes');
const userRouter = require('../routes/userRoutes');
const exerciseRouter = require('../routes/exerciseRoutes');

const setupRoutes = (app) => {
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/exercises', exerciseRouter);
};

module.exports = setupRoutes;
