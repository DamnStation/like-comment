import { useState } from "react";
import Profile1 from "../assets/profile1.svg";

type User = {
  Id: number;
  userName: string;
  companyTitle: string;
  companyName: string;
  profilePicture: string;
  likes: number;
  posts: number;
};

const userObject = {
  Id: 1036400004,
  userName: "Radoslav Marinov",
  companyTitle: "Co-Founder",
  companyName: "ViewRT",
  profilePicture: Profile1,
  likes: 210,
  posts: 4,
};
export const useUser = () => {
  const [_user, set_User] = useState(userObject);
  const updateUser = (user: User) => {
    set_User(user);
  };
  return {
    user: _user,
    updateUser,
    isLoading: false,
    error: null as Error | null,
  };
};
