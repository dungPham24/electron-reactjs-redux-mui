const BASE_URL = "https://dldd.bglobalcorp.vn/";

const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/x-www-form-urlencoded",
};
const TIMEOUT = 30000;
const STT_OK = 200;
const STT_BAD_REQUEST = 400;
const STT_UNAUTHORIZED = 401;
const STT_FORBIDDEN = 403;
const STT_NOT_FOUND = 404;
const STT_INTERNAL_SERVER = 500;
const STT_DUPLICATE_MESSAGE = 700;
const STT_MAINTAIN = 503;

export const USER_API = "api/user";

export {
  BASE_URL,
  HEADER_DEFAULT,
  TIMEOUT,
  STT_OK,
  STT_BAD_REQUEST,
  STT_UNAUTHORIZED,
  STT_NOT_FOUND,
  STT_FORBIDDEN,
  STT_INTERNAL_SERVER,
  STT_DUPLICATE_MESSAGE,
  STT_MAINTAIN,
};
