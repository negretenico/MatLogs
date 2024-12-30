import OpenAI from 'openai';

const client = new OpenAI({
  project: 'proj_HqTbuDL54BTxryoyl34JSNdv',
  apiKey: process.env.REACT_APP_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});
const chat = client.chat.completions.create;
export default chat;
