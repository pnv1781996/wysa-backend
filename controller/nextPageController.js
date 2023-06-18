import asyncHandler from "express-async-handler";
import getNextPageSchema from "../models/getNextPageDataModel.js";
import getQuestionSchema from "../models/getQuestionDataModel.js";
import getDashboardSchema from "../models/getDashboardDataModel.js";

export const getNextPage = asyncHandler(async (req, res) => {
  const currentValue = req.query.currentpage;
  let currentPageData;
  if (
    currentValue === null ||
    currentValue === undefined ||
    currentValue === ""
  ) {
    currentPageData = await getNextPageSchema.find();
  } else if (currentValue === "signup") {
    currentPageData = await getQuestionSchema.find();
  } else if (currentValue === "question") {
    currentPageData = await getDashboardSchema.find();
  }

  res.status(200).json(currentPageData);
});
