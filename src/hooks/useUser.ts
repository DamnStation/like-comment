import { useState } from "react";
import IvayloBachvarov from "../assets/Ivaylo-Bachvarov.svg";

type User = {
  user: {
    Id: number;
    userName: string;
    companyTitle: string;
    companyName: string;
    profilePicture: string;
    likes: number;
    posts: number;
  };
};

const userObject = {
  user: {
    Id: 1036400004,
    userName: "Ivaylo Bachvarov",
    companyTitle: "Co-Founder",
    companyName: "HackSoft",
    profilePicture: IvayloBachvarov,
    likes: 210,
    posts: 4,
  },
};
export const useUser = () => {
  const [_user, set_User] = useState(userObject.user);
  const upsertUserPosts = (_user?: User) => {
    set_User((prevState) => ({ ...prevState, posts: prevState.posts + 1 }));
  };
  return {
    user: _user,
    upsertUserPosts,
    isLoading: false,
    error: null as Error | null,
  };
};
