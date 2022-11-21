//every 1 hour create 10 new users and 1000 new posts
setInterval(async () => {
  for (let i = 0; i < 10; i++) {
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

    User.create({
      username: faker.internet.userName(),
      password: await bcrypt.hash("password", 10),
      bio: faker.lorem.paragraph(),
      image: faker.image.avatar(),
      isAdmin: false,
      createdAt: new Date(created_at),
    });
  }
  for (let i = 0; i < 1000; i++) {
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
      content: faker.lorem.paragraph(),
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
}, 3600000);
