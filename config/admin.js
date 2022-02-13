module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a6ba107e95d523abc42c3681fefa84f2'),
  },
});
