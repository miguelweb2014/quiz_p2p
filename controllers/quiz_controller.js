var models = require('../models/models.js');

// Autoload - factoriza el código si ruta incluye :quizId
exports.load = function(req, res, next, quizId) {
	models.Quiz.find(quizId).then(
		function(quiz) {
			if(quiz) {
				req.quiz = quiz;
				next();
			} else { next(new Error('No existe quizId=' + quizId)); }
		}).catch(function(error) { next(error); });
};

// GET /quizes --- ó --- GET /quizes?search=texto_a_buscar
exports.index = function(req, res) {
	var result = req.query.search;
	if(typeof result !== 'undefined') { //GET /quizes?search=texto_a_buscar
		var search = "%" + result.replace(/ /, "%") + "%";
		models.Quiz.findAll({where: ["pregunta like ?", search]}).then(function(quizes) {
			res.render('quizes/index.ejs', {quizes: quizes});
		})
	} else { // GET /quizes
		models.Quiz.findAll().then(function(quizes) {
			var search = "nada";
			res.render('quizes/index.ejs', {quizes: quizes});
		})
	}

};

// GET /quizes/:id
exports.show = function(req, res) {
	models.Quiz.find(req.params.quizId).then(function(quiz) {
		res.render('quizes/show', {quiz: req.quiz});
	})
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
	var resultado = 'Incorrecto';
	answer = req.query.respuesta.replace(/^[a-z]/, function(m) { 
													 return m.toUpperCase() 
												   });

	if(answer === req.quiz.respuesta) {
		resultado = 'Correcto';
	}
	res.render('quizes/answer', { quiz: req.quiz, respuesta: resultado });
};

// GET /quizes/question
exports.question = function(req, res) {
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
}

// GET /quizes/answer
exports.answer = function(req, res) {
	var regExp = /[Rr][Oo][Mm][Aa]/;
	if(regExp.test(req.query.respuesta)) {
		res.render('quizes/answer', {respuesta: 'Correcto'});
	} else {
		res.render('quizes/answer', {respuesta: 'Incorrecto'})
	}
}

// GET /quizes/author
exports.author = function(req, res) {
	res.render('quizes/author', {title: 'Quiz_p2p_mrm'});
}

