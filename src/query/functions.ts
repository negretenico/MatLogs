import { all } from './get/all';
import { individual } from './get/individual';
import { description } from './openai/description';

const env = process.env.REACT_APP_ENV || 'development'; // Default to "development"

const withEnvironment = (functionsByEnv: Record<string, Function>) => {
  return functionsByEnv[env] || functionsByEnv['default'];
};
export const QUERY_FUNCTIONS = {
  get: {
    all: withEnvironment(all),
    individual: (key: string) => withEnvironment(individual)(key),
  },
  openai: {
    description: (des: string) => withEnvironment(description)(des),
  },
};
