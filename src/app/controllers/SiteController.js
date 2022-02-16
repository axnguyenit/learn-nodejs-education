const { mutipleMongooseToObject } = require('../../utils/mongoose');
const Course = require('../models/Course');

class SiteController {

    // [GET] /
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            // .then(courses => res.json(courses))
            res.render('home', { courses: mutipleMongooseToObject(courses) });
        } catch (error) {
            next(error);
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;