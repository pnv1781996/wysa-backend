import {
  assessmentSchema,
  signupSchema,
  nextPageQParamSchema,
} from "../utils/apiValidations.js";

const postRoute = {
  "/api/user/signup": signupSchema,
  "/api/submit/assessment": assessmentSchema,
};
const getRoute = {
  "/api/pages/nextPageRedirect": nextPageQParamSchema,
};
export const payloadMiddleware = (req, res, next) => {
  let result;
  try {
    if (req.method === "POST") {
      result =
        postRoute[req.baseUrl + req.url] &&
        postRoute[req.baseUrl + req.url].parse(req.body);

      req.body = result;
    } else if (req.method === "GET") {
      result =
        getRoute[req.baseUrl + req.route.path] &&
        getRoute[req.baseUrl + req.route.path].parse(req.query);

      req.query = result;
    }
    next();
  } catch (error) {
    return res.status(400).send({
      message: "Invalid data",
    });
  }
};
