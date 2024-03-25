const router = require('express').Router();

const { addPost, allPosts } = require('../Controllers/postsController');

router.post('/add', addPost);
router.get('/all', allPosts);

module.exports = router;
