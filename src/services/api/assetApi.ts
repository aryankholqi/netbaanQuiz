import httpService from "../httpService";

const baseUrl = import.meta.env.VITE_BASE_API;

export const getAssetsInfoApi = () =>
  httpService.get(baseUrl + "72e7e252-2f2b-462c-8e60-30a8a0cac801");
