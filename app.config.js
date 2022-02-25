import 'dotenv/config';

export default ({ config }) => {
  return {
    extra: {
      API_URL: process.env.API_URL,
    },
    ...config,
  };
};
