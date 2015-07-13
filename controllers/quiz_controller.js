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