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
    <div className="flex flex-col">
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
    <div className="flex flex-col py-8">
      <p className="py-2">
        Winku (Whine) is a social media app that allows users to post messages
        and see other users messages. Just pick the users YOU want to follow and
        we display content from them! Yay!
      </p>
      <Team />
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold">About the CEO</h3>
        <p className="py-2">
          Emil Kantaneva, Creator, Founder, Chief Executive Officer of
          Winku.net, doesen't live, he <i>lives</i>. A fearless risk taker, this
          pioneer of Internet communications technology always strives to
          innovate the world around him, as well as innovate himself.
        </p>
        <p className="py-2">
          Born into a typical middle class family in the humble town of Lahti,
          Finland, Emil Kantaneva has struggled to overcome adversity. Despicte
          challges such as being born in Finland, Emil has managed to overcome
          these challenges and become the CEO of Winku.net.
        </p>
        <p className="py-2">
          Emil Kantaneva has moved back to Finland after living in the United
          States for 5 years. He has been working on Winku.net for the past 2
          years and is now ready to launch it to the world. He is currently
          working on a new project called Winku.net 2.0, which will be a
          complete overhaul of the current Winku.net. It will be a crazy program
          that ties all your communication portals together, such as Facebook,
          Instagram, Twitter, and more. It will be a game changer. Where Ryan
          Howard failed, Emil Kantaneva will succeed.
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold">About Winku</h3>
        <p className="py-2">
          Winku is a revolutionary social media app that allows users to post
          and see other users posts. It is a game changer.
        </p>
      </div>
    </div>
  );
};

export default About;
