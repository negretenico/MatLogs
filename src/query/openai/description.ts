import promptCreation from '../../prompt/creation';
import { openAIInstance } from '../../config/axiosConfig';

export const description = {
  development: async (des: string) => {
    const requestBody = {
      model: 'gpt-3.5-turbo',
      message: {
        role: 'user',
        content: promptCreation(des),
      },
    };
    try {
      debugger;
      const res = await openAIInstance.post('v1/chat/completions', requestBody);
      return res.data;
    } catch (error) {
      console.error('Error in development function:', error);
      throw error;
    }
  },
  production: async (description: string) => {
    const requestBody = {
      message: {
        role: 'user',
        content: promptCreation(description),
      },
    };
    try {
      await openAIInstance.post('/v1/chat/completions', requestBody);
    } catch (error) {
      console.error('Error in development function:', error);
      throw error;
    }
  },
};
