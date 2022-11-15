//make associations between the models
const User = require('./user');
const Post = require('./post');


const Associations = () => {
    User.hasMany(Post);
    Post.belongsTo(User);
};

export default Associations;