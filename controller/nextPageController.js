import asyncHandler from "express-async-handler";
import getNextPageSchema from "../models/getNextPageDataModel.js";
import getQuestionSchema from "../models/getQuestionDataModel.js";
import getDashboardSchema from "../models/getDashboardDataModel.js";

export const getNextPage = asyncHandler(async (req, res) => {
  const currentValue = req.query.currentpage;
  console.log(currentValue);
  let currentPageData;
  if (!currentValue) {
    currentPageData = await getNextPageSchema.findOne();
  } else if (currentValue === "signup") {
    currentPageData = await getQuestionSchema.findOne();
  } else if (currentValue === "question") {
    currentPageData = await getDashboardSchema.findOne();
  }

  res
    .status(200)
    .json({ screen: currentPageData.screen, data: currentPageData.data });
});
