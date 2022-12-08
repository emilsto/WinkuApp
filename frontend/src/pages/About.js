//about page that talks about the app and the team that created it
import React from "react";

//json array with team members Emil, Johnson and Ligma
const team = [
  {
    name: "Emil Kantaneva",
    github: "https://github.com/emilsto",
    avatar:
      "https://avatars.githubusercontent.com/u/70722483?s=400&u=062dbb94384357152ec92a57e94c5614145687f6&v=4",
    job: "Creator, Founder, Chief Executive Officer",
  },
];

const Team = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-2xl font-bold">Meet the team</h1>
      <div className="flex flex-wrap justify-center">
        {team.map((member) => (
          <div className="flex flex-col items-center m-5" key={member.name}>
            <img
              src={member.avatar}
              alt="avatar"
              className="rounded-full w-64 h-64 p-5 m-5 border-purple-500 border-2"
            />
            <h2 className="text-xl">{member.name}</h2>
            <p className="text-l">{member.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="flex flex-col md:py-8 py-0 md:m-0 m-5">
      <p className="py-2">
        Introducing Winku (pronounced "whine"), the hottest new social media app
        that lets you share your thoughts with the world (or just a select few).
        With Winku, you can post your musings and see what others are saying,
        all in one convenient location. And don't worry, we haven't implemented
        the "following" feature yet, so you can't follow anyone - sorry! But
        don't worry, we're working on it, and soon you'll be able to customize
        your feed by following your favorite users. So why not give Winku a try
        and start sharing your innermost thoughts with the world today! Just
        remember to keep it PG, folks.
      </p>
      <Team />
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold">About the CEO</h3>
        <p className="py-2">
          Meet Emil Kantaneva, the mad scientist of the internet world. Hailing
          from the land of saunas and reindeer, Emil has been tinkering with the
          web since he was old enough to type. With a passion for innovation and
          a willingness to take risks, Emil has built Winku.net from the ground
          up, and now he's ready to unleash his latest creation: Winku.net 2.0.
        </p>
        <p className="py-2">
          This new and improved version of Winku.net will be a one-stop shop for
          all your online communication needs. Say goodbye to switching between
          different apps and platforms - Winku.net 2.0 will bring Facebook,
          Instagram, Twitter, and more together in one convenient location. It's
          a bold move, but Emil is up for the challenge.
        </p>
        <p className="py-2">
          So if you want to stay connected with the people and things that
          matter most, keep your eye on Winku.net 2.0 - it's going to be a game
          changer. And who knows, maybe Emil will even manage to outdo Ryan
          Howard and become the internet's newest superhero.
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold">About Winku</h3>
        <p className="py-2">
          Say hello to Winku, the revolutionary new social media app that's
          going to change the game. With Winku, you can share your thoughts,
          feelings, and insights with the world (or just a select few). And the
          best part? You can see what others are posting, too! It's like having
          a personal newsfeed, tailored just for you. So why not give Winku a
          try and see what all the fuss is about? It's the app that's taking the
          world by storm, and we think you're going to love it.
        </p>
      </div>
    </div>
  );
};

export default About;
