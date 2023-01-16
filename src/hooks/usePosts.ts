import { useState } from "react";
import IvayloBachvarov from "../assets/Ivaylo-Bachvarov.svg";
import DanielGoshev from "../assets/Daniel-Goshev.svg";
import { useUser } from "./useUser";

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
      likedBy: [1036400004, 1036304568, 1036304568, 1036403568],
      dateToSeconds: 1673819050,
    },
    {
      Id: 1000050001,
      userName: "Ivaylo Bachvarov",
      profilePicture: IvayloBachvarov,
      companyTitle: "Co-Founder",
      companyName: "HackSoft",
      content:
        "Despite our total project numbers only increasing by 2% compared to last month, the 58 projects we are working on contain a significant increase in deliverables.",
      likedBy: [1036400004, 1036304568, 1036304568, 1036403568],
      dateToSeconds: 1473819050,
    },
    {
      Id: 1000000005,
      userName: "Daniel Goshev",
      profilePicture: DanielGoshev,
      companyTitle: "Software Developer",
      companyName: "HackSoft",
      content:
        "Veniam dolore et elit laboris velit adipisicing ad nulla elit duis incididunt et.",
      likedBy: [1036400004, 1036404568, 1036304568, 1036304568, 1036403568],
      dateToSeconds: 1673314107,
    },
    {
      Id: 1006300001,
      userName: "Ivaylo Bachvarov",
      profilePicture: IvayloBachvarov,
      companyTitle: "Co-Founder",
      companyName: "HackSoft",
      content:
        "Exercitation dolore aute duis dolore exercitation esse amet sunt commodo minim cillum nulla minim labore. Sint pariatur anim commodo cupidatat exercitation magna est enim ipsum quis. Enim proident id irure irure et est magna ut occaecat tempor dolore aliquip quis.",
      likedBy: [1036404568],
      dateToSeconds: 1673214107,
    },
    {
      Id: 1500040001,
      userName: "Ivaylo Bachvarov",
      profilePicture: IvayloBachvarov,
      companyTitle: "Co-Founder",
      companyName: "HackSoft",
      content:
        "Elit velit proident labore enim esse labore Lorem ea ea anim nisi. Aliquip ea officia ullamco ad et culpa ad occaecat tempor elit. Dolore ea veniam tempor anim veniam et eu.",
      likedBy: [1036404568, 1036404568, 1036304568, 1036304568, 1036403568],
      dateToSeconds: 1673316107,
    },
    {
      Id: 1000000002,
      userName: "Daniel Goshev",
      profilePicture: DanielGoshev,
      companyTitle: "Software Developer",
      companyName: "HackSoft",
      content:
        "Veniam dolore et elit laboris velit adipisicing ad nulla elit duis incididunt et.",
      likedBy: [],
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
      likedBy: [1036400004, 1036404568, 1036304568, 1036304568, 1036403568],
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
      likedBy: [1036404568, 1036404568, 1036304568, 1036304568, 1036403568],
      dateToSeconds: 1373715000,
    },
  ],
};
export const usePosts = () => {
  const { user } = useUser();
  const [posts, setPosts] = useState(postObjectArray.posts);
  const upsertPost = (newPost: typeof posts[0]) =>
    setPosts((prevState) => [newPost, ...prevState]);

  const upsertLike = (userLike?: typeof user) => {
    setPosts((prevState) => ({ ...prevState, post: prevState }));
    console.log("test");
  };
  return {
    posts,
    upsertPost,
    upsertLike,
    isLoading: false,
    error: null as Error | null,
  };
};
