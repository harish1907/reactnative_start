import { callApi } from "../../../utils/api/apiUtils";
import { authEndpoints } from "../../Endpoints/Product";

export const getAllProductService = () =>
  callApi({
    uriEndPoint: authEndpoints.getAllProduct.v1,
  });
