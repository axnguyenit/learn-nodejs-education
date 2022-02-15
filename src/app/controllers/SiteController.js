const Course = require('../models/Course');

class SiteController {

    // [GET] /
    index(req, res) {
        Course.find({}, (err, courses) => {
            if(!err) {
                res.json(courses);
                return;
            }
            res.status(500).json({ error: 'ERROR!!!' });
        });
        // res.json({ user: 'Kha' })
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;