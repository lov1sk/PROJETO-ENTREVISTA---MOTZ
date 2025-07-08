import axios from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 5 * 1000,
});
//172.20.10.4

export const urls = {
  TRAVEL: {
    GET_TRAVELS: "/motz-api/travel",
    GET_TRAVEL_DETAILS: "/motz-api/travel/:id",
    GET_TRAVEL_DOCUMENTS: "/motz-api/travel/:id/document",
  },
};
