module.exports = function(app, express) {
  var ctrl = require('./../app/controller');
  var userCtrl = ctrl.students;
  var authApi = require('./../app/config/auth');
  var router = express.Router();
  //JWT Authentication
  //students CRUD Operation
  router.get('/',authApi.auth,userCtrl.getStudentDetail);
  router.post('/',authApi.auth,userCtrl.addStudent);
  router.put('/',authApi.auth,userCtrl.updateStudent);
  router.delete('/',authApi.auth,userCtrl.deleteStudent);

  app.use('/students', router);
}
