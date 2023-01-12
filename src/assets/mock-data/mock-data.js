const mock_data = {
  response: {
    users: [
      {
        Id: 0000000001,
        userName: "Ivaylo Bachvarov",
        title: "Co-Founder",
        company: "HackSoft",
        likes: 210,
        posts: [
          {
            Id: 0000000001,
            content:
              "Despite our total project numbers only increasing by 2% compared to last month, the 58 projects we are working on contain a significant increase in deliverables.",
            likes: 12,
            dateToSeconds: 1200,
          },
          {
            Id: 0000000003,
            content:
              "Cupidatat laboris cupidatat qui aliqua dolore. Pariatur veniam proident et ipsum irure.",
            likes: 6,
            dateToSeconds: 1300,
          },
          {
            Id: 0000000004,
            content:
              "Cillum cillum irure aliqua ex elit duis sit non excepteur dolor.",
            likes: 3,
            dateToSeconds: 1100,
          },
        ],
      },
      {
        Id: 0000000002,
        userName: "Daniel Goshev",
        title: "Software Developer",
        company: "HackSoft",
        likes: 210,
        posts: [
          {
            Id: 0000000002,
            content:
              "Est eu ut sint adipisicing labore tempor magna. Anim eiusmod quis eiusmod commodo eu deserunt voluptate velit ipsum.",
            likes: 4,
            dateToSeconds: 1200,
          },
        ],
      },
    ],
  },
};
export default mock_data;
