import { request } from "./request";
import { GetProductsResponse } from "../../../server/types/response";

export const getProductsRequest = () => {
  return request.get<GetProductsResponse>("/product");
};
