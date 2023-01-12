export const useUsers = () => {
  return {
    users: {
      Id: 1036400004,
      userName: "Ivaylo Bachvarov",
      companyTitle: "Co-Founder",
      companyName: "HackSoft",
      likes: 3,
      posts: 5,
    },

    isLoading: false,
    error: null as Error | null,
  };
};
