import { User } from "../model/userModal.js";

export const signup = async (req, res, next) => {
  let { uname, email, pwd, phone } = req.body;

  //if info provided
  if (!uname || !email || !pwd || !phone)
    return res.status(400).send("Provide all the details");

  try {
    //if user exist
    let user = await User.findOne({ email: email });
    if (user) return res.status(400).send("User already Exist!");

    //create user
    let newUser = await User.create({
      uname: uname,
      email: email,
      pwd: pwd,
      phone: phone,
    });

    //generate token
    let tkn = newUser.genToken();

    res.status(200).json({ status: "Registration Successfull", token: tkn });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  let { email, pwd } = req.body;
  if (!email || !pwd) return res.status(400).send("Provide all the details");

  try {
    //if user exist
    let user = await User.findOne({ email: email });
    if (!user) return res.status(404).send("User not found");

    //is pwd correct
    let isMatch = await user.comparePwd(pwd);

    if (!isMatch) return res.status(401).send("Incorrect password");

    //saving /sending token
    let tkn = user.genToken();

    res.status(200).json({ status: "Login Successful", token: tkn });
  } catch (err) {
    next(err);
  }
};

export const logout = (req, res, next) => {
  res.clearCookie().status(200).send("Logout Successfull");
};

export const getUser = async (req, res) => {
  let user = await User.findById(req.user);
  user.pwd = null;
  res.status(200).send(user);
};
