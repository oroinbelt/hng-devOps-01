const AppRouter = require('express').Router();
const { getNumberProperties } = require('./controller')

AppRouter.get('/api/classify-number',  getNumberProperties)

module.exports = AppRouter;