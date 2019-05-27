
module.exports = function(app, express) {
    var ctrl = require('./../app/controller');
    var userCtrl = ctrl.users;
    var authCtrl = ctrl.authenticate;
    var router = express.Router();
    app.use('/', router);
};
