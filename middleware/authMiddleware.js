import jwt from 'jsonwebtoken'

const protect = (req, res, next) => {
  
  let token

  if (req.headers.authorization && 
      req.headers.authorization.startsWith('Bearer')) {

      try {
        token = req.headers.authorization.split(' ')[1]; //Remove 'Bearer' from auth header
        jwt.verify(token, process.env.JWT_SECRET)
        next()

        } catch (err) {
          res.status(401)
          throw new Error('Not authorized, token failed')
        }
    }
    
    if (!token) {
      res.status(401)
      throw new Error('Not authorized, no token')
    }
};

export { protect }