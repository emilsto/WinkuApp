import User from "./models/user_model.js";
import Post from "./models/post_model.js";
import bcrypt from "bcryptjs";


export const createPosts = async ()=> {
    const posts = await Post.findAll();
    if (posts.length === 0) {
      console.log("No posts found, creating posts...");
  
  for (let i = 0; i < 100; i++) {

    Post.create({
      content : post_content[Math.floor(Math.random()*post_content.length)],
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
      // get random username from array
      username: `${usernames[Math.floor(Math.random()*usernames.length)]}${usernames[Math.floor(Math.random()*usernames.length)]}` ,
      password: await bcrypt.hash(`password${i}`, 10),
      bio: bios[Math.floor(Math.random()*bios.length)],
      image: `https://avatars.githubusercontent.com/u/${i+Math.floor(Math.random()*2000)}?v=4`,
    });
  }
  }
};

//json array of usernames
const usernames = [
  "peter",
  "james",
  "john",
  "jacob",
  "joseph",
  "joshua",
  "josh",
  "jose",
  "josephine",
  "josephina",
  "mike",
  "michael",
  "michelle",
  "michal",
  "pekka",
  "pekko",
  "pertti",
  "petteri",
  "petri",
  "petra",
  "petter",
  "david",
  "davide",
  "davida",
  "davidson",
  "davidsson",
  "taavi",
  "taavetti",
  "olavi",
  "olav",
  "jussi",
  "jussila",
  "jussiina",
  "rauno",
  "rauni",
  "raunio",
  "rauniina",
  "rauniikki",
  "rauniikka",
  "eero",
  "eeronen",
  "eeroja",
  "eerojä",
  "olli",
  "ollija",
  "gwen",
  "gwendolyn",
  "gwendoline",
  "gwenola",
  "gwenola",
  "gonzalo",
  "hector",
  "hectorino",
  "hectorina",
  "bastian",
  "guillermo",
  "derick",
  "derickson",
  "dericksson",
  "åke",
  "öke",
  "äke",
  "ilmari",
  "ilmarinen",
  "ilmarin",
  "ilmar",
  "adolf",
  "adolfina",
  "adolfsson",
  "adolfson",
  "reijo",
  "reijola",
  "reijola",
  "reijoja",
  "reigo",
  "reigoja",
  "reigojä",
  "wolfgang",
  "wolfgangson",
  "wolfgangsson",
  "wolfgangina",
  "wolf",
  "wolfi",
  "wolfson",
  "wolfsson",
  "felix",
  "felixson",
  "felixsson",
  "felixina",
  "marcus",
  "marcusson",
  "marcussson",
  "marcusina",
];

//json array of bios
const bios = [
  "I am a bio",
  "I love to code",
  "I love to code and play video games",
  "Anime is not a lifestyle",
  "what is a bio",
  "I invented the internet",
  "I am a Lizard",
  "I suck every day",
  "is it a bird? is it a plane? no, it's a bio",
  "Elon Musk is my dad",
  "Musk did 9/11",
  "Truck nuts are the best",
  "Biden is a lizard",
  "Life is pain",
  "Hooters is my fav", 
  "What happend here?",
  "Blood and thuder",
  "Lok'tar ogar",
  "Kusipää ja sosiopaatti",
  "FANG companies SUkk",
  "Ponua poltan",
];

const post_content = [
  "This is my first post!! So excited about the future",
  "Bro what is life? I dont even know.",
  "Today I tried Kool-Aid",
  "Just setting up my Winku.",
  "It's difficult to understand the lengths he'd go to remain short",
  "He was willing to find the depths of the rabbit hole in order to be with her.",
  "They ran around the corner to find that they had traveled back in time.",
  "I was starting to worry that my pet turtle could tell what I was thinking.",
  "Iguanas were falling out of the trees.",
  "She didn't like to support Amazon, but she was too lazy to go shopping anywhere else.",
  "Dicking around with this new social app. Not rly sure what to make of it yet, but all and all it seems pretty promising!",
  "The shooter says goodbye to his love.",
  "When I was little I had a car door slammed shut on my hand and I still remember it quite vividly.",
  "Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn’t so bad after all.",
  "He wondered if she would appreciate his toenail collection.",
  "Carol drank the blood as if she were a vampire.",
  "The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup.",
  "I caught my squirrel rustling through my gym bag. LMAO!!! I killed the little guy later xD",


];
