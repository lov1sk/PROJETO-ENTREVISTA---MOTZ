import axios from "axios";
import Constants from "expo-constants";

export const api = axios.create({
  baseURL: "http://192.168.18.50:3232",
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
