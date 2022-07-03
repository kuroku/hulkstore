import axios, { AxiosInstance } from "axios";
import { SERVICE_URL } from "../config";

export const request: AxiosInstance = axios.create({
  baseURL: `${SERVICE_URL}/api/v1`,
  validateStatus: () => true,
});
