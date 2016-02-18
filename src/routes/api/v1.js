module.exports = function (express) {
  var router = express.Router();

  function success(data){
    console.log('success', data);
  }
  function err(data){
    console.log('error', data);
  }

  router.get('/', function( req, res) {
    res.status(200).json({ msg:'Hello World', healthy: true });
  });

  router.get('/status', function( req, res) {
    res.status(200).json({ healthy: true });
  });

  router.put('/degree', function(req, res) {
    var Degree = require('../../models/degree.js');
    Degree.create(req.body,err,success);
    res.json(req.body);
  });

  router.put('/degree/:id', function(req, res) {
    var Degree = require('../../models/degree.js');
    req.body.id = req.params.id;
    Degree.update(req.body,err,success);
    res.json(req.body);
  });

  return router;
};
