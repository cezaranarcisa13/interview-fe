import { join, map, pipe, toPairs } from "ramda";
export const defaultParams = {
  headers: {
    "Content-Type": "application/json",
    "x-authentication-token": "very-secrete-token"
  },
};

export const get = (url) =>
  fetch(url, {
    ...defaultParams,
    method: "get",
  });

export const post = (url, body = {}) =>
  fetch(url, {
    ...defaultParams,
    method: "post",
    body: JSON.stringify(body),
  });

export const put = (url, body = {}) =>
  fetch(url, {
    ...defaultParams,
    method: "put",
    body: JSON.stringify(body),
  });

export const del = (url, body = {}) =>
  fetch(url, {
    ...defaultParams,
    method: "delete",
    body: JSON.stringify(body),
  });

export const addQueryParams = pipe(toPairs, map(join("=")), join("&"));