import jwt from "jsonwebtoken";
export const tokenMiddleware = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (token) {
    jwt.verify(token, "secretkeyappearshere", function (err, decoded) {
      if (err) {
        return res
          .status(500)
          .send({ auth: false, message: "Failed to authenticate token." });
      }
      req.user = decoded._id;
    });
  } else if (
    (!token && req.originalUrl === "/api/pages/nextPageRedirect") ||
    req.originalUrl === "/api/user/signup"
  ) {
    req.query.currentpage = null;
  } else {
    return res
      .status(403)
      .send({ message: "A token is required for authentication" });
  }
  return next();
};
