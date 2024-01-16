export const useProject = () => {
  const project = useState("project", () => {
    return {
      info: {},
      background: "",
      agenda: [],
      invitation: [],
      sinergy: [],
    };
  });

  return { project };
};
