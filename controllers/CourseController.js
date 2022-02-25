const { mongooseToObject } = require('../utils/mongoose');
const Course = require('../models/Course');

class CourseController {
	// [GET] /courses/create
	create(req, res) {
		res.render('courses/create');
	}

	// [POST] /courses/store
	store(req, res) {
		const formData = req.body;
		formData.image = 'https://files.fullstack.edu.vn/f8-prod/courses/1.png';
		const course = new Course(formData);
		course.save((err) => {
			if (err) return;
			res.redirect('/');
		});
	}

	// [GET] /courses/:id
	async show(req, res, next) {
		try {
			const course = await Course.findById(req.params.id);
			res.render('courses/show', { course: mongooseToObject(course) });
		} catch (error) {
			next(error);
		}
	}

	// [GET] /courses/:id/edit
	async edit(req, res, next) {
		try {
			const course = await Course.findById(req.params.id);
			res.render('courses/edit', { course: mongooseToObject(course) });
		} catch (error) {
			next(error);
		}
	}

	// [PUT] /courses/:id
	update(req, res, next) {
		Course.updateOne({ _id: req.params.id }, req.body)
			.then(() => res.redirect('/me/stored/courses'))
			.catch(next);
	}

	// [DELETE] /courses/:id
	destroy(req, res, next) {
		Course.deleteOne({ _id: req.params.id })
			.then(() => res.redirect('back'))
			.catch(next);
	}
}

module.exports = new CourseController();
