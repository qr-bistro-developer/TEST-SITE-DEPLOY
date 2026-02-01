"use server";

import { httpRequest } from "@helpers/https/httpRequest";

export const fetchMenuItems = async ({ restaurantId = null } = {}) => {
  try {
    const result = await httpRequest({
      method: "get",
      path: `/restaurants/${restaurantId}/menu`,
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const createOrder = async ({ restaurantId = null, items = [] } = {}) => {
  try {
    const result = await httpRequest({
      method: "post",
      path: `/restaurants/${restaurantId}/orders`,
      data: { items },
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
