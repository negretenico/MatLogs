const promptCreation = (des: string) => {
  return `Rewrite this description to make it more clear and concise while ensuring it remains within a token/word limit of a short paragraph. Focus on clarity, keeping the key actions distinct and easy to follow. Here's the original: ${des}.`;
};
export default promptCreation;
