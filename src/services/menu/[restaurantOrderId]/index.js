"use server";

import { httpRequest } from "@helpers/https/httpRequest";
import _ from "lodash";

const REQUEST_MAIN_PATH = "/restaurant/menu";

export const getMenuList = async ({ payload }) => {
  try {
    const response = await httpRequest({
      path: `${REQUEST_MAIN_PATH}/get-menu-list`,
      data: payload,
    });
    console.log("response :>> ", response);
    const result = _.get(response, ["result"], []);
    const categories = _.chain(result)
      .map((item) => {
        return {
          id: _.get(item, ["id"]),
          value: _.get(item, ["name"]),
        };
      })
      .value();

    const productWithCategoryKey = _.chain(result)
      .keyBy((item) => {
        return _.get(item, ["id"]);
      })
      .mapValues((item) => {
        return _.get(item, ["restaurantProducts"], []);
      })
      .value();
    return { categories, productWithCategoryKey };
  } catch (error) {
    throw error;
  }
};

export const getMenuAndBuffetExpire = async ({ payload }) => {
  try {
    const response = await httpRequest({
      path: `${REQUEST_MAIN_PATH}/get-buffet-expire`,
      data: payload,
    });
    const resultExpireIn = _.get(response, ["result", "expireIn"], null);
    return resultExpireIn;
  } catch (error) {
    throw error;
  }
};
