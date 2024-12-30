import axios from 'axios';

const createInstance = (baseURL: string) => {
  return axios.create({
    baseURL,
    timeout: 20_000,
    headers: {
      'Content-Type': 'application/json',
      'OpenAI-Organization': process.env.REACT_APP_OPEN_AI_ORG_ID,
      'OpenAI-Project': process.env.REACT_APP_OPEN_AI_PROJECT_ID,
      Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_KEY}`,
    },
  });
};

export const openAIInstance = createInstance('https://api.openai.com/');
