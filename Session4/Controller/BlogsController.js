const BlogModel = require("../Model/BlogsModel");


async function createBlog(req, res) {
    const {title, content, author} = req.body;

    // user model object 

    const blogModelObject = BlogModel({
        title,
        content,
        author
    });


    // talk to DB to save this boject 

    try {
        const response = await blogModelObject.save()
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
        const allBlogs = await BlogModel.find({ _id: id });
        res.status(200).json(allBlogs);
    } catch(Error) {
        res.status(500).json(Error);
    }
    
}



module.exports = { getAllBlogs, deleteBlogById, getBlogById, createBlog}