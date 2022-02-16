const courseRouter = require('./courses');
const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');

const routes = (app) => {
    
    app.use('/me', meRouter);
    app.use('/courses', courseRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    
    // app.post('/search', (req, res) => {
    //     // http://127.0.0.1:8000/search?q=kha%20nguyen
    //     console.log(req.body);
    //     res.send('Search Success.');
    // });
}

module.exports = routes;