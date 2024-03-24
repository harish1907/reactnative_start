import { defaults } from "../default";

export const authEndpoints = {
  getAllProduct: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/product/getall",
    },
  },
};
