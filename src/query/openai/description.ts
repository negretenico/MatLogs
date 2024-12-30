import chat from '../../config/openaiConfig';
import promptCreation from '../../prompt/creation';

export const description = {
  development: async (des: string) => {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu ultrices purus. Curabitur nec dui quis enim blandit porta. Phasellus pretium enim rhoncus, sagittis tortor a, egestas erat. Praesent maximus ex id elit cursus pretium. Sed imperdiet sollicitudin quam sed cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst.';
  },
  production: async (description: string) => {
    debugger;
    const message = await chat({
      model: 'gpt-4o-mini-2024-07-18',
      messages: [{ role: 'user', content: promptCreation(description) }],
    });
    return message.choices[0].message.content;
  },
};
