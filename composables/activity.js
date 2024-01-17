export const useActivity = () => {
  const activity = useState("activity", () => {
    return {
      info: {},
      outcome: [],
      attendance: [],
      discussion: [],
      todo: [],
      summary: "",
    };
  });

  return { activity };
};
