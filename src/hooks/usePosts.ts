export const usePosts = () => {
  return {
    posts: [
      {
        Id: 1000000001,
        userName: "Ivaylo Bachvarov",
        companyTitle: "Co-Founder",
        companyName: "HackSoft",
        content:
          "Despite our total project numbers only increasing by 2% compared to last month, the 58 projects we are working on contain a significant increase in deliverables.",
        likes: 12,
        dateToSeconds: 1200,
      },
      {
        Id: 1000000002,
        userName: "Daniel Goshev",
        companyTitle: "Software Developer",
        companyName: "HackSoft",
        content:
          "Veniam dolore et elit laboris velit adipisicing ad nulla elit duis incididunt et.",
        likes: 6,
        dateToSeconds: 1300,
      },
      {
        Id: 1000000002,
        userName: "Daniel Goshev",
        companyTitle: "Software Developer",
        companyName: "HackSoft",
        content:
          "Veniam dolore et elit laboris velit adipisicing ad nulla elit duis incididunt et.",
        likes: 6,
        dateToSeconds: 1300,
      },
      {
        Id: 1000000003,
        userName: "Daniel Goshev",
        companyTitle: "Co-Founder",
        companyName: "HackSoft",
        content:
          "Cupidatat laboris cupidatat qui aliqua dolore. Pariatur veniam proident et ipsum irure.",
        likes: 6,
        dateToSeconds: 1300,
      },
      {
        Id: 1000000004,
        userName: "Ivaylo Bachvarov",
        companyTitle: "Co-Founder",
        companyName: "HackSoft",
        content:
          "Cillum cillum irure aliqua ex elit duis sit non excepteur dolor.",
        likes: 3,
        dateToSeconds: 1100,
      },
    ],
    isLoading: false,
    error: null as Error | null,
  };
};
