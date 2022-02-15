const newsRouter = require('./news');
const siteRouter = require('./site');

const routes = (app) => {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    
    // app.post('/search', (req, res) => {
    //     // http://127.0.0.1:8000/search?q=kha%20nguyen
    //     console.log(req.body);
    //     res.send('Search Success.');
    // });
}

module.exports = routes;