module.exports = function() {
  var Sequelize = require('sequelize');
  var mysql = require('mysql');
  var _sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: false
  });

  var _degree = _sequelize.define('degree', {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    }
  },
  // Disable Deletions
  { paranoid: true});

  var _course = _sequelize.define('course', {
    title: {
      type: Sequelize.STRING
    },
    course_code: {
      type: Sequelize.STRING
    }
  },
  // Disable Deletions
  { paranoid: true});

  var _rubric = _sequelize.define('rubric', {
    title: {
      type: Sequelize.STRING
    }
  },
  // Disable Deletions
  { paranoid: true});

  var _gradeOption = _sequelize.define('grade_option', {
    title: {
      type: Sequelize.STRING
    },
    value: {
      type: Sequelize.STRING
    }
  },
  // Disable Deletions
  { paranoid: true});

  var _section = _sequelize.define('section', {
    title: {
      type: Sequelize.STRING
    },
    section_weight: {
      type: Sequelize.INTEGER
    }
  },
  // Disable Deletions
  { paranoid: true});

  var _assay = _sequelize.define('assay', {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    link: {
      type: Sequelize.STRING
    },
    grade_weight: {
      type: Sequelize.INTEGER
    }
  },
  // Disable Deletions
  { paranoid: true});

  var _assessment = _sequelize.define('assessment', {
    title: {
      type: Sequelize.STRING
    },
    raw_json_assessment: {
      type: Sequelize.TEXT
    },
    score: {
      type: Sequelize.INTEGER
    }
  },
  // Disable Deletions
  { paranoid: true});

  _degree.hasMany(_course, {foreignKey: 'degree_id'});
  _course.hasMany(_rubric, {foreignKey: 'course_id'});
  _rubric.hasOne(_gradeOption, {foreignKey: 'grade_option_id'});
  _rubric.hasMany(_section, {foreignKey: 'section_id'});
  _section.hasMany(_assay, {foreignKey: 'assay_id'});



  _sequelize.sync();

  return {
    connection: _sequelize,
    degree: _degree,
    course: _course,
    rubric: _rubric,
    gradeOption: _gradeOption,
    section: _section,
    assay: _assay,
    assessment: _assessment
  }
}();
