import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  let tkn = req.cookies.token;
  if (!tkn)
    return (
      console.log("Cookie nai mili"), res.status(401).send("Unauthorized User")
    );

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
