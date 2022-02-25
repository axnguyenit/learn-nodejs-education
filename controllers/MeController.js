const { mutipleMongooseToObject } = require('../utils/mongoose');
const Course = require('../models/Course');

class SiteController {
	// [GET] /me/stored/courses
	async storedCourses(req, res, next) {
		try {
			const courses = await Course.find({});
			// .then(courses => res.json(courses))
			res.render('me/stored-courses', { courses: mutipleMongooseToObject(courses) });
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new SiteController();
