export const useProject = () => {
  const project = useState("project", () => {
    return {
      info: {},
      rundown: [],
      invitation: [],
      sinergy: [],
      indicator: [],
    };
  });

  return { project };
};
