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
    const result = _.get(response, ["result"], null);

    return result;
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
    const result = _.get(response, ["result"], null);
    return result;
  } catch (error) {
    throw error;
  }
};

export const getTableInformation = async ({ payload }) => {
  try {
    const response = await httpRequest({
      path: `${REQUEST_MAIN_PATH}/get-information-by-customer`,
      data: payload,
    });
    const result = _.get(response, ["result"], null);
    return result;
  } catch (error) {
    throw error;
  }
};
