module.exports = function (express) {
  var router = express.Router();

  router.get('/', function( req, res) {
    res.status(200).json({ msg:'Hello World', healthy: true });
  });

  router.put('/rubric', function(req, res) {

    var Rubric = require('../../models/rubric.js');

    //
    // var fakeRubricData = {
    //   title = 'Name Of Rubric',
    //   // degree_id = 'WDDBSi',
    //   // degree_group_id = 'WDDBS',
    //   course_id = 'WDD463-O', // psych of play DEP1013
    //   gradeOptions = [
    //     {
    //       title: 'Exceptional',
    //       value: 100
    //     },
    //     {
    //       title: 'Competent',
    //       value: 80
    //     },
    //     {
    //       displayText: 'Acceptable',
    //       value: 70
    //     },
    //     {
    //       displayText: 'Deficient',
    //       value: 40
    //     },
    //     {
    //       displayText: 'Negligent',
    //       value: 0
    //     }
    //   ];
    //   sections = [
    //     {
    //       title: 'Section title',
    //       sectionWeight: .2
    //       assessmentPoints: [
    //         {
    //           title: 'Line Item',
    //           description: 'Long winded description',
    //           infoLink: 'https://somelink.com',
    //           gradeWeight: .1
    //         }
    //       ]
    //     }
    //   ]
    // }
    res.json(req.body);
  });

  return router;
};
