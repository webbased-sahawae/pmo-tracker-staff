export const projectStatus = (value) => {
  if (value > 80)
    return {
      BarColor: "accent-green-500",
      title: "Very Impactful",
      text: "text-green-500",
      border: "border-green-500",
    };
  else if (value > 40)
    return {
      BarColor: "accent-orange-500",
      text: "text-orange-500",
      title: "Highly Impactful",
      border: "border-orange-500",
    };
  else
    return {
      BarColor: "accent-gray-500",
      text: "text-gray-500",
      title: "Impactful",
      border: "border-gray-500",
    };
};
