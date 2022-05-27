import { Request } from "express";

import { ServiceAPIResponse } from "../../types/serviceResponse";
import { Article } from "../../types/articles";

const getAll = async (req: Request): Promise<ServiceAPIResponse<Article[]>> => {
  /* fetch data here */
  return {
    statusCode: 200,
    body: [
      {
        title: "Article title",
      },
    ],
    headers: req.headers,
  };
};

const getById = async (req: Request): Promise<ServiceAPIResponse<Article>> => {
  /* fetch data here */
  /* id: req.params?.id */
  return {
    statusCode: 200,
    body: {
      title: "Article title",
    },
    headers: req.headers,
  };
};

export { getAll, getById };
