import User from "./models/user_model.js";
import Post from "./models/post_model.js";
import Comment from "./models/comment_model.js";
import Relationship from "./models/relationship_model.js";
import bcrypt from "bcryptjs";

export const createPosts = async () => {
  const posts = await Post.findAll();
  if (posts.length === 0) {
    console.log("No posts found, creating posts...");

    for (let i = 0; i < 100; i++) {
      //random time for createdAt, between 1 and 1000 days ago
      const randomTime = Math.floor(Math.random() * 100) + 1;
      const created_at = new Date();
      created_at.setDate(created_at.getDate() - randomTime);
      //remove some hours from the date
      created_at.setHours(created_at.getHours() - randomTime);
      //remove some minutes from the date
      created_at.setMinutes(created_at.getMinutes() - randomTime);
      //remove some seconds from the date
      created_at.setSeconds(created_at.getSeconds() - randomTime);

      const bool = Math.floor(Math.random() * 100) < 3 ? true : false;

      Post.create({
        content: post_content[Math.floor(Math.random() * post_content.length)],
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 10),

        // Set the user id to a random user id between 1 and 11
        userId: Math.floor(Math.random() * 11) + 1,
        // 3% chance of a post being epic, aka asigning bool value true
        isEpic: bool,
        isAdmin: false,
        createdAt: new Date(created_at),
      });
    }
  } else {
    console.log("Posts found, skipping...");
  }
};

// Create users

export const createUsers = async () => {
  const users = await User.findAll();
  if (users.length === 0) {
    // create user emilTheDev with password password
    User.create({
      username: "emilTheDev",
      password: await bcrypt.hash("password", 10),
      bio: "I am emilTheDev",
      image:
        "https://avatars.githubusercontent.com/u/70722483?v=4",
      isAdmin: true,
    });
    for (let i = 0; i < 10; i++) {
      User.create({
        // get random username by combining a first name and last name from the arrays
        username: `${firstname[Math.floor(Math.random() * firstname.length)]}${lastname[Math.floor(Math.random() * lastname.length)]}`,
        password: await bcrypt.hash(`password`, 10),
        bio: bios[Math.floor(Math.random() * bios.length)],
        image: `https://avatars.githubusercontent.com/u/${i + Math.floor(Math.random() * 2000)}?v=4`,
      });
    }

    // create 10 default users with random usernames, hashed passwords bios and use some random images from github

  //create user with no posts
  User.create({
    username: "noPosts",
    password: await bcrypt.hash("password", 10),
    bio: "I have no posts and I wish Topi would fix that",
    image: "https://avatars.githubusercontent.com/u/91017924?v=4",
  });
};
}

// create comments

export const createComments = async () => {
  const comments = await Comment.findAll();
  if (comments.length === 0) {
    console.log("No comments found, creating comments...");

    for (let i = 0; i < 1000; i++) {

      const randomTime = Math.floor(Math.random() * 100) + 1;
      const created_at = new Date();
      created_at.setDate(created_at.getDate() - randomTime);
      created_at.setHours(created_at.getHours() - randomTime);
      created_at.setMinutes(created_at.getMinutes() - randomTime);
      created_at.setSeconds(created_at.getSeconds() - randomTime);

      Comment.create({
        content:
          comment_content[Math.floor(Math.random() * comment_content.length)],
        createdAt: new Date(created_at),
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 10),
        userId: Math.floor(Math.random() * 11) + 1,
        postId: Math.floor(Math.random() * 100) + 1,
      });
    }
  } else {
    console.log("Comments found, skipping...");
  }
};

// array of comments

const comment_content = [
  "This is a comment",
  "I love this post",
  "Why do you think that?",
  "I agree",
  "I disagree",
  "You are wrong",
  "This is a really interesting point",
  "I never thought of it that way before",
  "Can you explain more?",
  "I'm not sure I understand",
  "I completely agree with you",
  "I totally disagree with you",
  "You're missing the point",
  "That's a good point, but I see things differently",
  "I'm not convinced by your argument",
  "I agree with your overall sentiment, but not with everything you said",
  "I have a different perspective on this issue",
  "I see what you're saying, but I don't think it's applicable in this case",
  "You're oversimplifying things",
  "You're overcomplicating things",
  "You're being too harsh",
  "You're being too lenient",
  "You're being unfair",
  "You're being biased",
  "You're being closed-minded",
  "You're being open-minded",
  "You're being unreasonable",
  "You're being rational",
  "You're being irrational",
  "You're being unhelpful",
  "You're being helpful",
  "Ugh, not this again...",
  "Seriously, why are you even posting this?",
  "Can't you come up with anything original?",
  "This is the most ridiculous thing I've ever seen.",
  "I can't believe you actually think this is a good idea.",
  "You're just trying to get attention, aren't you?",
  "I can't even with this right now...",
  "Can you please just stop?",
  "Is this a joke or something?",
  "This is why I can't stand social media.",
  "Wow, you really need to get a life.",
  "Do you ever think before you post?",
  "I bet you can't even back up your argument with facts.",
  "You're just repeating what someone else said without even understanding it.",
  "Please, spare us your uninformed opinions.",
  "You're just regurgitating the same old tired arguments.",
  "Do you even know what you're talking about?",
  "I can't believe anyone would take you seriously.",
  "You're just being obnoxious for the sake of it.",
  "Can you please just shut up already?",
  "I can't believe I'm wasting my time reading this nonsense.",
  "I'm blocking you right now because I can't stand this anymore.",
  "I love how you always have a positive attitude.",
  "You always make me smile, thank you for that.",
  "I admire your passion and dedication to your work.",
  "Your kindness is truly inspiring.",
  "I always look forward to reading your posts.",
  "Your perspective is always so interesting and unique.",
  "I appreciate your honesty and vulnerability in your writing.",
  "I enjoy how you always bring humor and lightness to the conversation.",
  "You have a great sense of humor and always know how to make me laugh.",
  "Your intelligence and wit never cease to amaze me.",
  "Why did the chicken cross the road? To get away from your terrible joke.",
  "Is this your first time making a joke, or have you been practicing for a while?",
  "I'm not laughing, I'm just allergic to bad jokes.",
  "I'm sorry, I can't hear you over the sound of how terrible your joke is.",
  "I'm going to need a second to recover from how bad that joke was.",
  "Did you just make that joke up on the spot, or have you been thinking about it for a while?",
  "I think your joke might be funnier if it wasn't so awful.",
  "I hope you didn't put too much effort into that joke, because it really wasn't worth it.",
  "I'm not laughing because I'm being polite, not because your joke is funny.",
  "You know what's not funny? Your joke.",
  "I'm sorry, I don't mean to be rude, but that joke was terrible.",
  "I think you might need some more practice before your jokes are ready for prime time.",
  "I'm sorry, but that joke is so bad that I'm physically incapable of laughing.",
  "I'm not laughing because I'm trying to avoid giving you the satisfaction of thinking your joke is funny.",
  "I'm sorry, I didn't mean to be mean, but that joke was just awful.",
  "I'm not laughing because I'm in shock that you actually thought that joke was funny.",
  "I'm sorry, I don't want to be rude, but that joke was just not funny at all.",
  "I'm not laughing because I'm too busy trying to come up with a way to tell you how bad your joke was without hurting your feelings.",
  "I'm sorry, I didn't mean to be rude, but that joke was so bad that it actually hurt my feelings.",
  "I'm not laughing because I'm trying to figure out how to tell you that your joke was terrible without hurting your feelings.",
  "I'm sorry, I didn't mean to be rude, but that joke was so bad that I'm actually offended.",
];

const firstname = [
  "Aino",
  "Anna",
  "Aino-Maria",
  "Antti",
  "Arttu",
  "Eemil",
  "Elina",
  "Emilia",
  "Heikki",
  "Helmi",
  "Henna",
  "Iida",
  "Ilmari",
  "Johanna",
  "Juho",
  "Juuso",
  "Kalle",
  "Kerttu",
  "Kirsi",
  "Lotta",
  "Maija",
  "Mikko",
  "Mikael",
  "Niina",
  "Noora",
  "Oskari",
  "Pekka",
  "Pentti",
  "Riikka",
  "Sakari",
  "Sanni",
  "Sanna",
  "Santtu",
  "Sara",
  "Sari",
  "Sauli",
  "Sofia",
  "Taru",
  "Tuuli",
  "Tuomas",
  "Valtteri",
  "Veera",
  "Venla"
];

const lastname = [
  "Aaltonen",
  "Haapala",
  "Hakala",
  "Hakkarainen",
  "Hakulinen",
  "Halonen",
  "Haltia",
  "Heikkinen",
  "Heikkil??",
  "Heiskanen",
  "Heiskari",
  "Helenius",
  "Helin",
  "Helli",
  "Hellsten",
  "Helminen",
  "Helo",
  "Hietala",
  "Hietanen",
  "Hiltunen",
  "Hirvonen",
  "Hirvonen",
  "Honkanen",
  "Honkonen",
  "Hovi",
  "Huhta",
  "Huhtala",
  "Huhtam??ki",
  "Huhtasaari",
  "Huikko",
  "Huikkola",
  "Huiskonen",
  "Huotari",
  "Huttunen",
  "Iivonen",
  "Ikonen",
  "Ik??heimonen",
  "Ilmonen",
  "Jauhiainen",
  "Jokinen",
  "J??rvinen",
  "J????skel??inen",
  "J????sk??",
  "Kainulainen",
  "Kajander",
  "Kallio",
  "Kalliom??ki",
  "Kangas",
  "Kangasniemi",
  "Kankaanp????",
  "Kannisto",
  "Kantonen",
  "Karjalainen",
  "Karppinen",
  "Kauppila",
  "Kauppinen",
  "Ketola",
  "Kiviluoto",
  "Kivim??ki",
  "Kivinen",
  "Koski",
  "Koskinen",
  "Kotiranta",
  "Kotiranta",
  "Kotka",
  "Kotkaniemi",
  "Kotkaniemi",
  "Kuisma",
  "Kuoppala",
  "Kuoppam??ki",
  "Kurki",
  "Kurkij??rvi",
  "Kuusisto",
  "Kuusisto",
  "Kuusinen",
  "Kuusisto",
  "Lahtinen",
  "Lahtinen",
  "Laiho",
  "Laine",
  "Laitinen",
];


//json array of bios

const bios = [
  "I am a bio",
  "I love to code",
  "I love to code and play video games",
  "Anime is not a lifestyle",
  "What is a bio?",
  "I invented the internet",
  "Reading and writing in free time",
  "Food enthusiast trying new recipes",
  "Nature lover hiking and camping",
  "Music enthusiast playing instruments",
  "Fitness enthusiast staying active",
  "Travel enthusiast exploring new places",
  "Bookworm reading all genres",
  "Dog lover spending time with pups",
  "Fashion enthusiast following trends",
  "Photography enthusiast capturing moments",
  "Tech enthusiast staying up-to-date",
  "Art enthusiast creating and appreciating",
  "Movie buff watching all genres",
  "Gardener growing and tending plants",
  "Cook experimenting with new flavors",
  "Yoga practitioner staying flexible",
  "Expert napper taking daily siestas",
  "Professional procrastinator always late",
  "Jokester making people laugh",
  "Chocolate lover indulging daily",
  "Cat person living with fur babies",
  "Coffee addict fueling daily routine",
  "Space enthusiast exploring the universe",
  "Game of Thrones fan watching reruns",
  "Disney enthusiast visiting the parks",
  "Harry Potter fan sorting into houses",
  "Marvel fan collecting all the comics",
  "Star Wars fan watching the movies",
  "Superhero fan saving the world"
];

const post_content = [
  "I had the most delicious smoothie for breakfast this morning. It had banana, strawberries, and almond milk. Yum!",
  "Just finished a 5 mile run. Feeling energized and ready to tackle the day.",
  "My cat keeps knocking things off my desk. I swear she does it on purpose just to annoy me.",
  "I can't believe it's already December. Where did the year go?",
  "I've been thinking about starting a plant-based diet. Has anyone here tried it? What are your thoughts?",
  "Does anyone have any recommendations for a good book to read? I'm in the mood for something suspenseful.",
  "Just found out that my favorite band is coming to town next month. I can't wait to see them live!",
  "I'm considering taking up meditation. Has anyone here tried it? Is it worth it?",
  "I love the feeling of snuggling up under a warm blanket on a cold day. It's the little things in life that make me happy.",
  "I'm thinking of getting a new tattoo. Any ideas for something unique and meaningful?",
  "I've been struggling to stay focused and productive lately. Any tips for staying motivated?",
  "I'm so excited for the holidays. I can't wait to spend time with my family and friends and enjoy all the delicious food.",
  "I'm thinking about starting a blog. Has anyone here had any experience with blogging? What are your tips for success?",
  "I'm going to the beach next week and I can't wait to feel the sand between my toes and the sun on my face.",
  "I'm trying to learn a new language and it's been challenging but so rewarding. Anyone else here learning a new language?",
  "I'm thinking about starting a book club. Would anyone be interested in joining?",
  "I'm trying to eat healthier and I've been experimenting with new recipes. Anyone have any healthy meal ideas to share?",
  "I'm thinking about taking a trip to a new city next year. Any recommendations for must-see places?",
  "I'm trying to be more environmentally friendly and I've been making a conscious effort to reduce my waste and use reusable products.", 
  "I love spending my days exploring the forests and mountains around my home.",
"I just started learning to code and it's been really challenging but also really fun.",
"I'm a big fan of jazz music and I love going to live shows.",
"I recently got a new puppy and she's the cutest thing ever!",
"I'm a huge fan of science fiction and I love reading and watching all kinds of stories in that genre.",
"I'm a big fan of video games and I love spending my free time playing all kinds of different games.",
"I love going for long walks and enjoying the beauty of nature.",
"I'm a big fan of cooking and I love trying out new recipes and experimenting with different ingredients.",
"I'm a big fan of traveling and I love exploring new places and learning about different cultures.",
"I love spending time with my friends and family and enjoying good food and conversation.",
"I'm a big fan of sports and I love watching and playing all kinds of different games.",
"I'm a big fan of art and I love going to museums and galleries to see all kinds of different works.",
"I'm a big fan of animals and I love spending time with my pets and learning about different species.",
"I'm a big fan of music and I love listening to all kinds of different genres and artists.",
"I'm a big fan of gardening and I love growing my own fruits and vegetables.",
"I'm a big fan of history and I love learning about different periods and events from the past.",
"I love spending time outdoors and enjoying the fresh air and sunshine.",
"I'm a big fan of literature and I love reading all kinds of different books and stories.",
"I'm a big fan of photography and I love taking pictures of all kinds of different subjects.",
"I'm a big fan of technology and I love learning about new gadgets and devices.",
"I'm a big fan of fashion and I love trying out new styles and trends.",
]

