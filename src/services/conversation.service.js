import { ApiConstant } from "const";
import { createApiRegistration } from "api";

export const testApiService = (data) =>
  createApiRegistration().post(ApiConstant.USER_API, data);
