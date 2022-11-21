//about page that talks about the app and the team that created it
import React from "react";

//json array with team members Emil, Johnson and Ligma
const team = [
  {
    name: "Emil Kantaneva",
    github: "https://github.com/emilsto",
    avatar:
      "https://avatars.githubusercontent.com/u/70722483?s=400&u=062dbb94384357152ec92a57e94c5614145687f6&v=4",
    desc: "The brains",
  },
  {
    name: "Ligma Johnson",
    github: "https://github.com/emilsto",
    avatar: "https://avatars.githubusercontent.com/u/61960239?v=4",
    desc: "The party animal",
  },
];

const Team = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Meet the team</h1>
      <div className="flex flex-wrap justify-center">
        {team.map((member) => (
          <div className="flex flex-col items-center m-5" key={member.name}>
            <img
              src={member.avatar}
              alt="avatar"
              className="rounded-full w-32 h-32 p-5 m-5"
            />
            <h2 className="text-xl">{member.name}</h2>
            <p className="text-l">{member.desc}</p>
            <p className="text-l">{member.github}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="flex flex-col m-5">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="py-2">
        Winku (Whine) is a social media app that allows users to post messages
        and see other users messages. Just pick the users YOU want to follow and
        we display content from them! Yay!
      </p>
      <Team />
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold">Our story</h3>
        <p className="py-2">
          Winku is an app that is ultimately about freedom of speech. We want to
          give people a platform to express themselves and share their thoughts
          with the world. We want to give people a voice. Elon Musk has ruined
          yet another social media platform. He has ruined Twitter, Facebook,
          and now he is trying to ruin Reddit. We want to give people a place to
          go where they can express themselves freely without being censored by
          the government or a billionaire. This is our glorious revolution. This
          is our fight for freedom. This is our fight for the people. This is
          our fight for Winku.
        </p>
      </div>
    </div>
  );
};

export default About;
