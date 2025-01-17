import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "10d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // XSS protection
    secure: process.env.NODE_ENV === 'production', // Secure cookies for production
    sameSite: "strict", // CSRF protection
  });
  
};
export default createTokenAndSaveCookie;
