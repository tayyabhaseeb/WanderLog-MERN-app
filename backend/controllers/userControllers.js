exports.getAllUsers = (req, res, next) => {
  res.status(200).json({
    status: "Success",
    message: "Get All Users Route",
  });
};

exports.signupController = (req, res, next) => {
  res.status(200).json({
    status: "Success",
    message: "Sign up Route",
  });
};

exports.loginController = (req, res, next) => {
  res.status(200).json({
    status: "Success",
    message: "Login up Route",
  });
};
