module.exports = function(app, express) {
  var ctrl = require('./../app/controller');
  var teacherCtrl = ctrl.teachers;
  var authApi = require('./../app/config/auth');
  var router = express.Router();

  //Add Teacher/Subject by single api
  router.post('/',authApi.auth,teacherCtrl.addResource);
  app.use('/teachersubject', router);
}
