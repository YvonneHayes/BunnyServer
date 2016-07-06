const tokenCheck = require('./token');

module.exports = function ensureAuth(req, res, next) {
  if (req.method === 'OPTIONS') return next();
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.replace('Bearer ', ''):'';


  if (!token) {
    return next({code:403, error: 'no token provided'});
  }

  tokenCheck.verify(token)
    .then(payload => {
      req.user = payload;
      next();
    })
    .catch(() => {
      next({code: 403, error: 'invalid token'});
    });
};
