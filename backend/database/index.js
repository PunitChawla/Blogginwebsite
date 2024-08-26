const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:Punit1234@cluster0.gzacrdj.mongodb.net/blogginWebsite")

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const blogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true  
    },
    title:{
        type : String,
        minLength : 5,
        require : true
    },
    content :{
        type : String,
        minLength : 10,
        require : true
    },
    date:{
        type:String
    },
    image:{
        type: String
    }
    
});


const User = mongoose.model('User', userSchema);
const Blog = mongoose.model('blog', blogSchema);

module.exports = {
	User,
    Blog
};