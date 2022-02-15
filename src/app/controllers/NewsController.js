class NewsController {

    // [GET] /news --> Display a listing of the resource.
    index(req, res) {
        res.render('news');
    }

    // [POST] /news --> Store a newly created resource in storage.
    store() {}

    // [GET] /news/:slug --> Display the specified resource.
    show(req, res) {
        res.send('NEWS DETAILS');
    }

    // [POST] /news/update --> Update the specified resource in storage.
    update() {}

    // [POST] /news/
    destroy() {}
}

module.exports = new NewsController;