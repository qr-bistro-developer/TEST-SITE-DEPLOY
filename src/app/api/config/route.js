export const GET = async (params) => {
  return Response.json({
    API_ENDPOINT: process.env.API_ENDPOINT,
    API_KEY: process.env.API_KEY,
    PRIVATE_SECRET_KEY: process.env.PRIVATE_SECRET_KEY,
  });
};
