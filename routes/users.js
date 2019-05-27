module.exports = function(app, express) {
  var ctrl = require('./../app/controller');
  var authCtrl = ctrl.authenticate;

  var router = express.Router();

  //Authentication apis
  router.post('/registration', authCtrl.registration);
  router.post('/login', authCtrl.login);

  app.use('/users', router);
}
