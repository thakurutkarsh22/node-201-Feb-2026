
const express = require('express');
const { getAllBlogs, createBlog, getBlogById, deleteBlogById } = require('../Controller/BlogsController');
const BlogInputValidationSchema = require('../Middleware/blogInputSchemaValidation');
const router = express.Router();

router.post('/createBlog', BlogInputValidationSchema, createBlog);
router.get('/getAllBlogs', getAllBlogs);
router.get('/getBLogById/:id', getBlogById);
router.delete('/deleteById/:id', deleteBlogById);

module.exports = router;