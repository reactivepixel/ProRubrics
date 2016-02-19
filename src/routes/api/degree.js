module.exports = function (express) {
  var router = express.Router();
  var Degree = require('../../models/degree.js');

  // Read One
  router.get('/degree/:id', function(req, res) {
    req.body.id = req.params.id;
    Degree.find(req.body,function(err){
      // Error Encountered
      res.status(500).json(err);
    },function(data) {
      res.status(200).json(data);
    });
  });

  // Read All
  router.get('/degree', function(req, res) {
    Degree.findAll(function(err){
      // Error Encountered
      res.status(500).json(err);
    },function(data) {
      res.status(200).json(data);
    });
  });

  // Create
  router.put('/degree', function(req, res) {
    Degree.create(req.body,function(err){
      // Error Encountered
      res.status(500).json(err);
    },function(data) {
      res.status(200).json(data);
    });
  });

  // Update
  router.put('/degree/:id', function(req, res) {
    req.body.id = req.params.id;
    Degree.update(req.body,function(err){
      // Error Encountered
      res.status(500).json(err);
    },function(data) {
      res.status(200).json(data);
    });
  });

  // Delete One
  router.delete('/degree/:id', function(req, res) {
    req.body.id = req.params.id;
    Degree.destroy(req.body,function(err){
      // Error Encountered
      res.status(500).json(err);
    },function(data) {
      res.status(200).json({success:data});
    });
  });

  return router;
};
