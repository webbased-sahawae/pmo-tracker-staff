export const useActivity = () => {
  const activity = useState("activity", () => {
    return {
      info: {
        flyer: false,
        photo: false,
        video: false,
        release: false,
      },
      // outcome: [],
      // attendance: [],
      discussion: [],
      // todo: [],
      summary: "",
    };
  });

  return { activity };
};
