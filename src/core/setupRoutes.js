const authRouter = require('../routes/authRoutes');
const userRouter = require('../routes/userRoutes');
const exerciseRouter = require('../routes/exerciseRoutes');
const intensityRouter = require('../routes/intensityRoutes');
const mealPlanRouter = require('../routes/mealPlanRoutes');

const setupRoutes = (app) => {
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/exercises', exerciseRouter);
  app.use('/api/v1/intensities', intensityRouter);
  app.use('/api/v1/mealsPlans', mealPlanRouter);
};

module.exports = setupRoutes;
