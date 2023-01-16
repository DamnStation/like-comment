import IvayloBachvarov from "../assets/Ivaylo-Bachvarov.svg";
export const useUsers = () => {
  return {
    users: {
      Id: 1036400004,
      userName: "Ivaylo Bachvarov",
      companyTitle: "Co-Founder",
      companyName: "HackSoft",
      profilePicture: IvayloBachvarov,
      likes: 210,
      posts: 5,
    },
    isLoading: false,
    error: null as Error | null,
  };
};
