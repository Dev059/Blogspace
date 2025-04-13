import dotenv from "dotenv"
dotenv.config()


  export const sendToken = (user, statusCode, message, res) => {
    const token = user.getJWTToken();
  
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      sameSite: "None", // Required when frontend and backend are on different domains
      secure: true,     // Required when sameSite is None (HTTPS only)
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };
  