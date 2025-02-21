const { CustomAPIError } = require("../errors/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  // console.log(err)
  // // return res.status(500).json({msg:"something went wrong"})
  // return res.status(err.status).json({msg:err.message})
  if (err instanceof CustomAPIError) {  // 如果是自定義錯誤
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res // 如果不是自定義錯誤
    .status(500)
    .json({ msg: "Something went wrong, please try again." });
};

module.exports = errorHandlerMiddleware;
