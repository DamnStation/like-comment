import { useState } from "react";
import Profile1 from "../assets/profile1.svg";
import Profile2 from "../assets/profile2.svg";

const postObjectArray = {
  posts: [
    {
      Id: 1000000001,
      userName: "Radoslav Marinov",
      profilePicture: Profile1,
      companyTitle: "Co-Founder",
      companyName: "ViewRT",
      content:
        "Despite our total project numbers only increasing by 2% compared to last month, the 58 projects we are working on contain a significant increase in deliverables.",
      likedBy: [1036400004, 1036304568, 1036304568, 1036403568],
      dateToSeconds: 1673819050,
    },
    {
      Id: 1000050001,
      userName: "Radoslav Marinov",
      profilePicture: Profile1,
      companyTitle: "Co-Founder",
      companyName: "ViewRT",
      content:
        "Despite our total project numbers only increasing by 2% compared to last month, the 58 projects we are working on contain a significant increase in deliverables.",
      likedBy: [1036400004, 1036304568, 1036304568, 1036403568],
      dateToSeconds: 1473819050,
    },
    {
      Id: 1000000005,
      userName: "Veselin Nikolov",
      profilePicture: Profile2,
      companyTitle: "Software Developer",
      companyName: "ViewRT",
      content:
        "Veniam dolore et elit laboris velit adipisicing ad nulla elit duis incididunt et.",
      likedBy: [1036400004, 1036404568, 1036304568, 1036304568, 1036403568],
      dateToSeconds: 1673314107,
    },
    {
      Id: 1006300001,
      userName: "Radoslav Marinov",
      profilePicture: Profile1,
      companyTitle: "Co-Founder",
      companyName: "ViewRT",
      content:
        "Exercitation dolore aute duis dolore exercitation esse amet sunt commodo minim cillum nulla minim labore. Sint pariatur anim commodo cupidatat exercitation magna est enim ipsum quis. Enim proident id irure irure et est magna ut occaecat tempor dolore aliquip quis.",
      likedBy: [1036404568],
      dateToSeconds: 1673214107,
    },
    {
      Id: 1500040001,
      userName: "Radoslav Marinov",
      profilePicture: Profile1,
      companyTitle: "Co-Founder",
      companyName: "ViewRT",
      content:
        "Elit velit proident labore enim esse labore Lorem ea ea anim nisi. Aliquip ea officia ullamco ad et culpa ad occaecat tempor elit. Dolore ea veniam tempor anim veniam et eu.",
      likedBy: [1036404568, 1036404568, 1036304568, 1036304568, 1036403568],
      dateToSeconds: 1673316107,
    },
    {
      Id: 1000000002,
      userName: "Veselin Nikolov",
      profilePicture: Profile2,
      companyTitle: "Software Developer",
      companyName: "ViewRT",
      content:
        "Veniam dolore et elit laboris velit adipisicing ad nulla elit duis incididunt et.",
      likedBy: [],
      dateToSeconds: 1673314107,
    },

    {
      Id: 1000000003,
      userName: "Veselin Nikolov",
      profilePicture: Profile2,
      companyTitle: "Co-Founder",
      companyName: "ViewRT",
      content:
        "Cupidatat laboris cupidatat qui aliqua dolore. Pariatur veniam proident et ipsum irure.",
      likedBy: [1036400004, 1036404568, 1036304568, 1036304568, 1036403568],
      dateToSeconds: 1673314107,
    },
    {
      Id: 1000000004,
      userName: "Radoslav Marinov",
      profilePicture: Profile1,
      companyTitle: "Co-Founder",
      companyName: "ViewRT",
      content:
        "Cillum cillum irure aliqua ex elit duis sit non excepteur dolor.",
      likedBy: [1036404568, 1036404568, 1036304568, 1036304568, 1036403568],
      dateToSeconds: 1373715000,
    },
  ],
};
export const usePosts = () => {
  const [_posts, set_Posts] = useState(postObjectArray.posts);
  const upsertPost = (newPost: typeof _posts[0]) =>
    set_Posts((prevState) => [newPost, ...prevState]);

  const likeDislikePost = (postId: number, userId: number) => {
    const updatedPosts = [..._posts];
    let addOrRemoveCount = 0;
    updatedPosts.forEach((post) => {
      if (post.Id === postId) {
        if (post.likedBy.includes(userId)) {
          post.likedBy = post.likedBy.filter((x) => x !== userId);
          addOrRemoveCount--;
        } else {
          post.likedBy.push(userId);
          addOrRemoveCount++;
        }
      }
    });
    set_Posts(updatedPosts);
    return addOrRemoveCount;
  };

  return {
    posts: _posts,
    upsertPost,
    likeDislikePost,
    isLoading: false,
    error: null as Error | null,
  };
};
