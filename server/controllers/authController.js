import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  let tkn = req.cookies.token;
<<<<<<< HEAD
  if (!tkn)
    return (
      console.log("Cookie nai mili"), res.status(401).send("Unauthorized User")
    );
=======
  if (!tkn) return console.log('token not found'), res.status(401).send("Unauthorized User");
>>>>>>> 329eef21772cfa94059f01964e9c875331e0ba8c

  try {
    jwt.verify(tkn, process.env.JWT_SECRET, (error, decoded) => {
      if (error || !decoded) {
        return res.status(401).send("Access denied to unauthorized user");
      } else {
        req.user = decoded.User;
        next();
      }
    });
  } catch (err) {
    next(err);
  }
};

export default isAuthenticated;
