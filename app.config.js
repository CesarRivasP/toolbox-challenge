import 'dotenv/config';

export default ({ config }) => {
  return {
    extra: {
      API_URL: process.env.API_URL,
      ACCESS_USER_KEY: process.env.ACCESS_USER_KEY,
    },
    ...config,
  };
};
