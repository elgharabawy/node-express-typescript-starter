import { Request, Response, NextFunction } from "express";

import * as cmsContentItemService from "../services/cmsContentItem.service";

const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //TODO: implement (how to pass id)
    res.json(await cmsContentItemService.get(req.params?.id));
  } catch (err: any) {
    //TODO: typing for errors
    console.error(`Error while getting cms content item`, err.message);
    next(err);
  }
};

export { get };
