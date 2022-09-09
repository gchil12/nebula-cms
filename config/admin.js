module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'nblstring123'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'nblstring123'),
  },
});
