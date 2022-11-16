import User from "./models/user_model.js";
import Post from "./models/post_model.js";
import bcrypt from "bcryptjs";


export const createPosts = async ()=> {
    const posts = await Post.findAll();
    console.log("====================================");
    console.log("Finding posts...");
    console.log("====================================");
    if (posts.length === 0) {
      console.log("No posts found, creating posts...");
  
  for (let i = 0; i < 100; i++) {

    Post.create({
      content : "This is a test post, please do enjoy",
      likes: Math.floor(Math.random() * 100),
      dislikes: Math.floor(Math.random() * 10),
  
      // Set the user id to a random user id between 1 and 11
      userId: Math.floor(Math.random() * 11) + 1,
    });
  }
    } else {
      console.log("Posts found, skipping...");
    }
}

  
// Create users
  
export const createUsers = async () => {
    const users = await User.findAll();
    if (users.length === 0) {
  // create user emilTheDev with password password
  User.create({
    username: "emilTheDev",
    password: await bcrypt.hash("password", 10),
    bio: "I am emilTheDev",
    image: "https://avatars.githubusercontent.com/u/70722483?s=400&u=062dbb94384357152ec92a57e94c5614145687f6&v=4",
  });
  
  // create 10 default users with random usernames, hashed passwords bios and use some random images from github
  for (let i = 0; i < 10; i++) {
    User.create({
      username: `user${i}`,
      password: await bcrypt.hash(`password${i}`, 10),
      bio: `bio${i}`,
      image: `https://avatars.githubusercontent.com/u/${i}?v=4`,
    });
  }
  }
};
