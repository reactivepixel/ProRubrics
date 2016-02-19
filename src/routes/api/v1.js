module.exports = function (express) {
  var router = express.Router();

  function success(data){
    console.log('success', data);
  }
  function err(data){
    console.log('error', data);
  }

  router.get('/', function(req, res) {
    res.status(200).json({ msg:'Hello World', healthy: true });
  });

  router.get('/status', function(req, res) {
    res.status(200).json({ healthy: true });
  });

  // Read One
  router.get('/degree/:id', function(req, res) {
    var Degree = require('../../models/degree.js');
    req.body.id = req.params.id;
    Degree.find(req.body,err,function(data) {
      res.json(data);
    });
  });

  // Read All
  router.get('/degree', function(req, res) {
    var Degree = require('../../models/degree.js');
    Degree.findAll(err,function(data) {
      res.json(data);
    });
  });

  // Create
  router.put('/degree', function(req, res) {
    var Degree = require('../../models/degree.js');
    Degree.create(req.body,err,function(data) {
      res.json(data);
    });
  });

  // Update
  router.put('/degree/:id', function(req, res) {
    var Degree = require('../../models/degree.js');
    req.body.id = req.params.id;
    Degree.update(req.body,err,function(data) {
      res.json(data);
    });
  });

  return router;
};
