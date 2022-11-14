//about page that talks about the app and the team that created it
import React from "react";

//json object contains creator data, github link and profile picture
const creator = {
    name: "Emil",
    github: "https://github.com/emilsto",
    avatar: "https://avatars.githubusercontent.com/u/70722483?s=400&u=062dbb94384357152ec92a57e94c5614145687f6&v=4",
};


const About = () => {
  return (
    <div className="flex flex-col m-5">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="">
        This is a social media app that allows users to post messages and see
        other users messages. Just pick the users YOU want to follow and we
        display content from them! Yay!
      </p>
      <div className="flex flex-col justify-center">
      <p className="text-xl mt-5">This app was created by: </p>
        <div className="flex flex-row items-center">
            <img src={creator.avatar} alt="creator avatar" className="rounded-full w-32 h-32 p-5 m-5" />
            <div className="flex flex-col">
                <p className="text-xl">{creator.name}</p>
                <a href={creator.github} className="text-xl text-purple-400">Github link!</a>
                </div>
            </div>
            </div>
    </div>
  );
};

export default About;
