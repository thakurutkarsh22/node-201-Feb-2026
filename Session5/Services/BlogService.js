const BlogModel = require("../Model/BlogsModel");

// there is a concept of Dependency injection 
class BlogService {

    // this is kind Dependency injection  
    // constructor() {
    //     AuthService
    // }
     
    // static : -> whenever  BlogService is created createBlog is created at that point only
     static async createBlog({title, content, author}) {
        
        // user model object - LOGIC

        const blogModelObject = BlogModel({
            title,
            content,
            author
        });


        // talk to DB to save this boject 

        try {
            const response = await blogModelObject.save()
            return response;
        } catch(error) {
            return error;
        }
    }

    static async getBlogById(id) {
        try {
            const allBlogs = await BlogModel.find({ _id: id });
            return allBlogs;
        } catch(error) {
            return error;
        }
    }
}


module.exports = BlogService;