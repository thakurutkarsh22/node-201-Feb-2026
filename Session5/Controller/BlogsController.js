const BlogModel = require("../Model/BlogsModel");
const BlogService = require("../Services/BlogService");


async function createBlog(req, res) {

    try {
        const response = await BlogService.createBlog(req.body);
        res.status(201).json(response);
    } catch(Error) {
        res.status(500).json(Error);
    }
}




async function getAllBlogs(req, res) {
    try {
        const allBlogs = await BlogModel.find({});
        res.status(200).json(allBlogs);
    } catch(Error) {
        res.status(500).json(Error);
    }
}

function deleteBlogById(req, res) {
    
}

async function getBlogById(req, res) {
    const params = req.params;
    const id = params.id;

    try {
        const allBlogs = await BlogService.getBlogById(id);
        res.status(200).json(allBlogs);
    } catch(Error) {
        res.status(500).json(Error);
    }
    
}



module.exports = { getAllBlogs, deleteBlogById, getBlogById, createBlog}