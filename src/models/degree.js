module.exports = function() {
  var db = require('./db.js');
  var sequelize = db.connection;

  function _create(payload, err, success){
    var cleanData = payload;
    db.degree.create(cleanData).then(success).catch(err);
  }

  function _update(payload, err, success){
    var cleanData = payload;
    db.degree.find({where:{id:cleanData.id}}).then(function(matchedDegree){
        matchedDegree.updateAttributes(payload).then(success).catch(err);
    }).catch(err);
  }

  function _find(payload, err, success){
    var cleanData = payload;
    db.degree.find({where:{id:cleanData.id}}).then(success).catch(err);
  }

  function _findAll(err, success){
    db.degree.findAll().then(success).catch(err);
  }

  function _destroy(payload, err, success){
    var cleanData = payload;
    db.degree.destroy({where:{id:cleanData.id}}).then(success).catch(err);
  }

  return {
    create: _create,
    update: _update,
    find: _find,
    findAll: _findAll,
    destroy: _destroy,
  }
}();
