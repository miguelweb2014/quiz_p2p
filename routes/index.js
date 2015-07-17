var express = require('express');
var router = express.Router();

<<<<<<< HEAD
var quizController = require('../controllers/quiz_controller');
=======
var quizController = require('../controllers/quiz_controller')
>>>>>>> 6153b1fad6b9412cd438fa5b8155ae5ec64facfa

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

<<<<<<< HEAD
// autoload de comandos con :quizId
router.param('quizId', quizController.load); // autoload :quizId

// definición de las rutas de /quizes
router.get('/quizes',						quizController.index),
router.get('/quizes/:quizId(\\d+)', 		quizController.show),
router.get('/quizes/:quizId(\\d+)/answer',  quizController.answer);
=======
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/quizes/author', quizController.author);
>>>>>>> 6153b1fad6b9412cd438fa5b8155ae5ec64facfa

module.exports = router;
