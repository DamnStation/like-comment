import { useState } from "react";
import IvayloBachvarov from "../assets/Ivaylo-Bachvarov.svg";
import DanielGoshev from "../assets/Daniel-Goshev.svg";

const postObjectArray = {
  posts: [
    {
      Id: 1000000001,
      userName: "Ivaylo Bachvarov",
      profilePicture: IvayloBachvarov,
      companyTitle: "Co-Founder",
      companyName: "HackSoft",
      content:
        "Despite our total project numbers only increasing by 2% compared to last month, the 58 projects we are working on contain a significant increase in deliverables.",
      likes: 12,
      dateToSeconds: 1673819050,
    },
    {
      Id: 1000000005,
      userName: "Daniel Goshev",
      profilePicture: DanielGoshev,
      companyTitle: "Software Developer",
      companyName: "HackSoft",
      content:
        "Veniam dolore et elit laboris velit adipisicing ad nulla elit duis incididunt et.",
      likes: 6,
      dateToSeconds: 1673314107,
    },
    {
      Id: 1006300001,
      userName: "Ivaylo Bachvarov",
      profilePicture: IvayloBachvarov,
      companyTitle: "Co-Founder",
      companyName: "HackSoft",
      content:
        "Despite our total project numbers only increasing by 2% compared to last month, the 58 projects we are working on contain a significant increase in deliverables.",
      likes: 12,
      dateToSeconds: 1673214107,
    },
    {
      Id: 1500040001,
      userName: "Ivaylo Bachvarov",
      profilePicture: IvayloBachvarov,
      companyTitle: "Co-Founder",
      companyName: "HackSoft",
      content:
        "Despite our total project numbers only increasing by 2% compared to last month, the 58 projects we are working on contain a significant increase in deliverables.",
      likes: 12,
      dateToSeconds: 1673314107,
    },
    {
      Id: 1000000002,
      userName: "Daniel Goshev",
      profilePicture: DanielGoshev,
      companyTitle: "Software Developer",
      companyName: "HackSoft",
      content:
        "Veniam dolore et elit laboris velit adipisicing ad nulla elit duis incididunt et.",
      likes: 6,
      dateToSeconds: 1673314107,
    },

    {
      Id: 1000000003,
      userName: "Daniel Goshev",
      profilePicture: DanielGoshev,
      companyTitle: "Co-Founder",
      companyName: "HackSoft",
      content:
        "Cupidatat laboris cupidatat qui aliqua dolore. Pariatur veniam proident et ipsum irure.",
      likes: 6,
      dateToSeconds: 1673314107,
    },
    {
      Id: 1000000004,
      userName: "Ivaylo Bachvarov",
      profilePicture: IvayloBachvarov,
      companyTitle: "Co-Founder",
      companyName: "HackSoft",
      content:
        "Cillum cillum irure aliqua ex elit duis sit non excepteur dolor.",
      likes: 3,
      dateToSeconds: 1373715000,
    },
  ],
};
export const usePosts = () => {
  const [posts, setPosts] = useState(postObjectArray.posts);
  return {
    posts,
    setPosts,
    isLoading: false,
    error: null as Error | null,
  };
};
