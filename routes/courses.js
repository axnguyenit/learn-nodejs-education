const express = require('express');
const router = express.Router();
const courseController = require('../controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.destroy);
router.get('/:id', courseController.show);

module.exports = router;
