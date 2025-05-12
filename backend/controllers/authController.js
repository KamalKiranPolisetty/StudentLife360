import User from "../models/user.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import xssFilters from "xss-filters";

const oneDay = 1000 * 60 * 60 * 24;

const register = async (req, res) => {
  const { firstName, email, password, loginName } = req.body;

  if (!firstName || !email || !password || !loginName) {
    throw new BadRequestError("Please provide all values");
  }

  const userByEmail = await User.findOne({ email });
  const userByLoginName = await User.findOne({ loginName });

  if (userByEmail && userByLoginName) {
    throw new BadRequestError(
      `The email: ${email} and login name: ${loginName} are already in use.`
    );
  } else if (userByEmail) {
    throw new BadRequestError(`The email: ${email} is already in use.`);
  } else if (userByLoginName) {
    throw new BadRequestError(
      `The login name: ${loginName} is already in use.`
    );
  }

  const user = await User.create({ firstName, email, password, loginName });

  const token = user.createToken();
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.firstName,
      loginName: user.loginName,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const token = user.createToken();
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });

  user.password = undefined;

  res.status(StatusCodes.OK).json({
    user,
  });
};

// const updateUser = async (req, res) => {
//   const { email, name, lastName, location, skills } = req.body;

//   if (!email || !name || !lastName || !location || !skills) {
//     throw new BadRequestError("Please provide all values");
//   }

//   const user = await User.findOne({ _id: req.user.userId });

//   user.email = xssFilters.inHTMLData(email);
//   user.name = xssFilters.inHTMLData(name);
//   user.lastName = xssFilters.inHTMLData(lastName);
//   user.location = xssFilters.inHTMLData(location);

//   await user.save();

//   const token = user.createToken();

//   res.cookie('token', token, {
//     httpOnly: true,
//     expires: new Date(Date.now() + oneDay),
//     secure: process.env.NODE_ENV === 'production',
//   });

//   res.status(StatusCodes.OK).json({
//     user
//   });
// };

const updateUser = async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    department,
  } = req.body;

  if (
    !email ||
    !firstName ||
    !lastName ||
    !address ||
    !city
  ) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId });

  user.email = xssFilters.inHTMLData(email);
  user.firstName = xssFilters.inHTMLData(firstName);
  user.lastName = xssFilters.inHTMLData(lastName);
  user.address = xssFilters.inHTMLData(address);
  user.city = xssFilters.inHTMLData(city);
  user.state = xssFilters.inHTMLData(state);
  user.zipCode = xssFilters.inHTMLData(zipCode);
  user.department = xssFilters.inHTMLData(department);

  await user.save();

  const token = user.createToken();

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({
    user,
  });
};

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  user.password = undefined;
  res.status(StatusCodes.OK).json({
    user,
  });
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });

  res.status(StatusCodes.OK).json({
    msg: "User logged out!",
  });
};

export { register, login, updateUser, getCurrentUser, logout };
